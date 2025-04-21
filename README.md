# InfoWise - AI Chat Assistant

InfoWise is a modern, responsive AI chat assistant built with React and powered by Google's Gemini AI. It provides an intuitive interface for users to engage in conversations with an AI assistant, featuring real-time message updates, code syntax highlighting, and emoji support.

![InfoWise Screenshot]

## Features

- 🤖 Powered by Google's Gemini-1.5-Flash AI model
- 🔐 User authentication with Firebase
- 💬 Real-time chat functionality
- 🎨 Modern, responsive UI with dark mode
- 📝 Markdown support for messages
- 💻 Code syntax highlighting
- 😊 Emoji picker integration
- 📱 Mobile-friendly design
- 🔄 Chat history management
- 🚀 Fast and efficient performance

## Tech Stack

- **Frontend Framework**: React
- **UI Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI Integration**: Google Generative AI (Gemini)
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Build Tool**: Vite
- **Icons**: React Icons
- **Additional Features**:
  - Emoji Mart for emoji picker
  - React Markdown for message formatting
  - React Syntax Highlighter for code blocks
  - Sonner for toast notifications

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A Firebase account
- A Google AI API key (for Gemini)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd reactChatBot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── components/        # React components
│   ├── auth/         # Authentication related components
│   └── ...          
├── services/         # API and service functions
├── config/           # Configuration files
├── pages/           # Page components
├── App.jsx          # Main application component
└── App.css          # Global styles
```

## Features in Detail

### Authentication
- User registration and login
- Protected routes
- Profile management

### Chat Interface
- Real-time message updates
- Message history
- Code block formatting
- Emoji picker
- Markdown support
- Mobile-responsive design

### AI Integration
- Powered by Google's Gemini AI
- Natural language processing
- Code understanding and generation
- Context-aware responses

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Generative AI team for Gemini
- Firebase team for the excellent backend services
- All the open-source contributors whose libraries made this project possible

---

Made with ❤️ using React and Google's Gemini AI 
