import React from "react";
import {useState} from "react";
import {ProjectModel} from "../Project.model";
import ProjectFields from "../fields/ProjectFields";
import {useCreateProjectMutation} from "../../../api/ProjectApi";
import { Modal } from 'antd';


interface NewProjectPanelProps {
    closeNewProjectPanel: () => void;
}
const NewProjectPanel = ({closeNewProjectPanel}: NewProjectPanelProps) => {
    const [newProject, setNewProject] = useState<ProjectModel | undefined>(undefined)
    const [createProject, {error }] =
        useCreateProjectMutation();
    const [showSaveProjectError, setShowSaveProjectError] = useState(false);

    const handleSave = () => {
        createProject(newProject).unwrap()
            .then(() => {
                closeNewProjectPanel();
            })
            .catch((err) => {
                setShowSaveProjectError(true);
            });
    };

    const handleModalClose = () => {
        setShowSaveProjectError(false);
    };

    return (
        <div className={'overlay-panel'}>
            <h1>New Project</h1>
            <ProjectFields setProject={setNewProject}></ProjectFields>
            <button onClick={handleSave}>Save</button>
            {showSaveProjectError && (
                <Modal
                    title="Error"
                    open={showSaveProjectError}
                    onOk={handleModalClose}
                >
                    <p>Error saving project</p>
                </Modal>
            )}
        </div>
    )
}
export default NewProjectPanel;