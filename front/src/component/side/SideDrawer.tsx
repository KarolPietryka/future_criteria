import React, { useState } from 'react';
import {ProjectModel} from "../project/Project.model";
import "./SideComponent.scss"
import SideProjectFilter from "./SideProjectFilter";

interface SidePanelProps {
    openNewProjectPanel: () => void;
}
const SideDrawer = ({ openNewProjectPanel }: SidePanelProps) => {
    const [projects, setProjects] = useState<Array<ProjectModel>>([]);

    const handleNewProject = () => {
        openNewProjectPanel();
    };

    return (
        <aside style={{ width: '250px', backgroundColor: '#f0f0f0', padding: '10px', display: "table"}}>
            <SideProjectFilter/>
            <button onClick={handleNewProject}>
                New Project
            </button>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project.name}</li>
                ))}
            </ul>
        </aside>
    );
};

export default SideDrawer;
