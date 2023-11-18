import React from "react";
import {useState} from "react";

interface NewProjectPanelProps {
    closeNewProjectPanel: () => void;
}
const NewProjectPanel = ({closeNewProjectPanel}: NewProjectPanelProps) => {
    const [projectName, setProjectName] = useState<string>('')
    const [projectDescription, setProjectDescription] = useState<string>('')
    const handleSave = () => {
        closeNewProjectPanel();
    }

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#e88989',
            padding: '20px',
            zIndex: 1000
        }}>
            <div>
                <h1>New Project</h1>
                <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)}/>
                <br/>
                <textarea value={projectDescription} onChange={e => setProjectDescription(e.target.value)}/>
                <br/>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
export default NewProjectPanel;