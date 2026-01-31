import { useState } from 'react';
import ProcessingPage from "./pages/ProcessingPage";
import UploadPage from "./pages/UploadPage";
// import ChatbotPage from "./pages/ChatbotPage";
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("upload");
  return (
    <div>
      {currentPage === "upload" && (
        <UploadPage onNext ={() => setCurrentPage("processing")}/>
      )}
      {currentPage === "processing" && (
        <ProcessingPage onNext ={() => setCurrentPage("chat")}/>
      )}
      {/* {currentPage === "chat" && <ChatbotPage />}*/}
    </div>
  );
}

export default App;
