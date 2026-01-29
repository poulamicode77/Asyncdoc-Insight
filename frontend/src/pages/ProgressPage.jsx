import { useState } from 'react'; //useState is imported to decalare state variables 
function ProgressPage() {
const [state, setState] = useState([
    {name : "Upload Received", percent: 100}, // List of Dictionaries to hold progress steps
    {name : "Received File", percent: 50}, // state = array of objects with name and percent properties
    {name : "Processing Data", percent: 30},
    {name : "Starting Upload", percent: 0} 
])
}
export default ProgressPage;