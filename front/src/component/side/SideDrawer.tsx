import React, { useState } from 'react';
import {ProjectModel} from "../project/Project.model";
import "./SideComponent.scss"
import SideFilter from "./SideFilter";

interface SidePanelProps {
    openNewProjectPanel: () => void;
}
const SideDrawer = ({ openNewProjectPanel }: SidePanelProps) => {
    const [projects, setProjects] = useState<Array<ProjectModel>>([]);

    const handleNewProject = () => {
        openNewProjectPanel();
    };

    return (
        <aside style={{ width: '250px', backgroundColor: '#f0f0f0', padding: '10px' }}>
            <SideFilter/>
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
