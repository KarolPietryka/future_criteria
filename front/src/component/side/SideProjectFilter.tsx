import React from "react";
import "./SideComponent.scss"
import ProjectFields from "../project/fields/ProjectFields";

const SideProjectFilter = () => {
    const [filterFieldsEnabled, setFilterFieldsEnabled] = React.useState(false);
    const [filterProject, setFilterProject] = React.useState({});

    const toggleFilterFields = () => setFilterFieldsEnabled(!filterFieldsEnabled);
    return (
        <div>
            <button onClick={toggleFilterFields}>
                Filter
            </button>
            {filterFieldsEnabled && <ProjectFields setProject={setFilterProject}/> }
        </div>
    );
};
export default SideProjectFilter;
