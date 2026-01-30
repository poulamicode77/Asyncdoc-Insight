import { useState } from 'react';
import ProgressPage from "./pages/ProgressPage";
import UploadPage from "./pages/UploadPage";
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("upload");
  return (
    <>
      {currentPage === "upload" && (
        <UploadPage onNext ={() => setCurrentPage("progress")}/>
      )}
      {currentPage === "progress" && <ProgressPage/>}
    </>
  );
}

export default App;
