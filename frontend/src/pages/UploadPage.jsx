import React, { useState } from "react";
function UploadPage({ onNext }){
    const [file, setFile] = useState(null);
    const [previewText, setPreviewText] = useState("");

    const hadleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if(selectedFile){
            setPreviewText(

            );
        }
    };
return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Upload Documents</h2>
        <input 
            type="file" 
            accept=".pdf,.xls,.xlsx" 
            onChange={hadleFileChange}
        />
        {file && (
            <div
                style={{ 
                    marginTop: "20px", 
                    height: "200px",
                    overflowY: "scroll", 
                    border: "1px solid #ccc", 
                    padding: "10px",
                    backgroundColor: "#fafafa" 
                }}
            >
                <pre style={{ whiteSpace: "pre-wrap" }}>{previewText}</pre>
            </div>
            )}
        <button 
            onClick={onNext}
            disabled={!file}
            style={{ 
                marginTop: "20px", 
                padding: "10px 20px", 
                cursor: file ? "pointer" : "not-allowed",
            }}
        >
            Upload
        </button>
    </div>    
    );
}

export default UploadPage;