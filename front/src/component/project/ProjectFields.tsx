import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ProjectModel} from "./Project.model";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./ProjectFields.scss"
import {toJavaLocalDataTime} from "../../utils/DataUtils";
import ContainFields from "./fields/ContainFields";
interface ProjectFieldsProps {
    setProject: Dispatch<SetStateAction<ProjectModel | undefined>>
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
            <ContainFields
                setProjectName={setProjectName}
                setProjectDescription={setProjectDescription}
                setIsPrivate={setIsPrivate}/>
            <DatePicker className="dataPicker"
                selected={startDate}
                onChange={(date) => setStartDate(date || new Date())}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br/>
            End Date:
            <br/>
            <DatePicker className="dataPicker"
                selected={endDate}
                onChange={(date) => setEndDate(date || new Date())}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br/>
        </>
    )
}

export default ProjectFields