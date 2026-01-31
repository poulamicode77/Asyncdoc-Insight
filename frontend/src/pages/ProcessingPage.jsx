import React, { useEffect, useState} from "react";

function ProcessingPage({onNext}) {
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() =>{
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100){
                    clearInterval(interval);
                    setCompleted(true);
                    return 100;
                }
                return prev + 10;
            })
        }, 500);
        return () => clearInterval (interval);
    }, []);
    return(
        <div style={{padding: "40px", maxWidth: "600px", margin: "0 auto"}}>
            <h2>Processing File</h2>
            <div 
                style={{
                    width: "100%",
                    height: "14px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "7px",
                    marginTop : "20px"
                }}
            >
                <div 
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: "#4caf50",
                        borderRadius: "7px",
                        transition: "width 0.5s ease-in-out",
                    }}
                />
            </div>

            
            <p style={{ marginTop: "10px"}}>{progress}%</p>

            
            {completed && (
                <p style={{ color: "green", marginTop: "10px" }}>
                Upload Complete
                </p>
            )}

            <button
                onClick={onNext}
                disabled={!completed}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    cursor: completed ? "pointer" : "not-allowed",
                }}
            >
                Next
            </button> 
        </div>
    );
}
export default ProcessingPage;