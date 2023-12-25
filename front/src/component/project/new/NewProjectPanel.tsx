import React from "react";
import {useState} from "react";
import {ProjectModel} from "../Project.model";
import ProjectFields from "../fields/ProjectFields";

interface NewProjectPanelProps {
    closeNewProjectPanel: () => void;
}
const NewProjectPanel = ({closeNewProjectPanel}: NewProjectPanelProps) => {
    const [newProject, setNewProject] = useState({})
    const handleSave = () => {
        closeNewProjectPanel();
    }

    return (
        <div className={'overlay-panel'}>
            <h1>New Project</h1>
            <ProjectFields setProject={setNewProject}></ProjectFields>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}
export default NewProjectPanel;