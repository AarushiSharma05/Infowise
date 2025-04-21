import { IoCodeSlash } from 'react-icons/io5';
import { BiPlanet } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { TbMessageChatbot } from 'react-icons/tb';

const WelcomeScreen = ({ onQuestionClick }) => {
  const questions = [
    {
      text: "What is coding? How can we learn it?",
      icon: <IoCodeSlash />,
      question: "What is coding?"
    },
    {
      text: "Which is the red planet of the solar system?",
      icon: <BiPlanet />,
      question: "Which is the red planet of the solar system?"
    },
    {
      text: "In which year was Python invented?",
      icon: <FaPython />,
      question: "In which year was Python invented?"
    },
    {
      text: "How can we use AI for adoption?",
      icon: <TbMessageChatbot />,
      question: "How can we use AI for adoption?"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center pr-4 mr-10 py-8 ml-40">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
          Welcome to InfoWise
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {questions.map((item, index) => (
            <button
              key={index}
              onClick={() => onQuestionClick(item.question)}
              className="group relative bg-[#1a1a1a] hover:bg-[#242424] border border-gray-800 hover:border-blue-500/30 transition-all duration-300 rounded-xl p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors">
                  {item.icon}
                </span>
                <div>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                  <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300">
                    Click to get detailed information
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
