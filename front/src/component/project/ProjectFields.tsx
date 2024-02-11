import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ProjectModel} from "./Project.model";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./ProjectFields.scss"
import {toJavaLocalDataTime} from "../../utils/DataUtils";
import NoEquationFields from "./fields/NoEquationFields";
import EquationFields from "./fields/EquationFields";
interface ProjectFieldsProps {
    setProject: Dispatch<SetStateAction<ProjectModel | undefined>>
    filterMode: boolean
}
const ProjectFields = (projectFieldsProps: ProjectFieldsProps) => {
    const [projectName, setProjectName] = useState<string>('')
    const [projectDescription, setProjectDescription] = useState<string>('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [isPrivate, setIsPrivate] = useState(false);

    useEffect(() => {
        projectFieldsProps.setProject({
            name: projectName,
            description: projectDescription,
            startDate: toJavaLocalDataTime(startDate),
            endDate: toJavaLocalDataTime(endDate),
            isPrivate: isPrivate,
            tasks: null
        });
    }, [projectName, projectDescription, startDate, endDate, isPrivate]);

    return (
        <>
            <NoEquationFields
                setProjectName={setProjectName}
                setProjectDescription={setProjectDescription}
                setIsPrivate={setIsPrivate}/>
            <EquationFields
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                filterMode={projectFieldsProps.filterMode}
            />
            <br/>
        </>
    )
}

export default ProjectFields