import React from "react";
function UploadPage({ onNext }){
return (
    <div>
        <h2>Upload Documents</h2>

        <button onClick={onNext}>
            Start Processing
        </button>
    </div>    
    );
}

export default UploadPage;