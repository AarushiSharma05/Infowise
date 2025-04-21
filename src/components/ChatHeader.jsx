import { IoAddCircle, IoLogOut } from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ChatHeader = ({ onNewChat }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out');
    }
  };

  return (
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
              onClick={handleLogout}
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
  );
};

export default ChatHeader;
