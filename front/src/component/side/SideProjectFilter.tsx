import React, {useState} from "react";
import "./SideComponent.scss"
import ProjectFields from "../project/ProjectFields";
import {useFilterProjectsQuery} from "../../api/ProjectApi";
import {ProjectModel} from "../project/Project.model";

const SideProjectFilter = () => {
    const [filterFieldsEnabled, setFilterFieldsEnabled] = useState(false);
    const [filterProject, setFilterProject] = useState<ProjectModel | undefined>(undefined);
    const [queryFilterProject, setQueryFilterProject] = useState<ProjectModel>();
    const { data: projects, error, isLoading, refetch } = useFilterProjectsQuery(queryFilterProject);

    const toggleFilterFields = () => setFilterFieldsEnabled(!filterFieldsEnabled);
    const getProject = () => {
        // const filterProjectStringified = {
        //     ...filterProject,
        //     startDate: filterProject?.startDate.toISOString(),
        //     endDate: filterProject?.endDate.toISOString()
        // };
        setQueryFilterProject(filterProject);
        console.log(projects);

    };

    return (
        <div>
            <button onClick={toggleFilterFields}>
                Filter
            </button>
            {filterFieldsEnabled &&
            <div>
                <ProjectFields
                    setProject={setFilterProject}
                    filterMode={true}
                />
                <button onClick={getProject}>
                    Search
                </button>
            </div>
            }
        </div>
    );
};
export default SideProjectFilter;
