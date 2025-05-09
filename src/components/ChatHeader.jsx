import { IoAddCircle, IoLogOut } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const ChatHeader = ({ onNewChat }) => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Error signing out");
    }
  };

  const openLogoutPopup = () => {
    setShowLogoutPopup(true);
  };

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#121212] border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text tracking-tight">
              InfoWise
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={onNewChat}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200"
              >
                <IoAddCircle className="text-lg" />
                <span className="hidden sm:inline">New Chat</span>
              </button>
              <button
                onClick={openLogoutPopup}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200"
                title="Logout"
              >
                <IoLogOut className="text-lg" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Confirm Logout
            </h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeLogoutPopup}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  closeLogoutPopup();
                  handleLogout();
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatHeader;
