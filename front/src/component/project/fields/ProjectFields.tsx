import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ProjectModel} from "../Project.model";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./ProjectFields.scss"
import {toJavaLocalDataTime} from "../../../utils/DataUtils";
interface ProjectFieldsProps {
    setProject: Dispatch<SetStateAction<ProjectModel | undefined>>
}
const ProjectFields = (projectFieldsProps: ProjectFieldsProps) => {
    const [projectName, setProjectName] = useState<string>('')
    const [projectDescription, setProjectDescription] = useState<string>('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [isPrivate, setIsPrivate] = useState(false);

    const toggleIsPrivate = () => {setIsPrivate(!isPrivate);}
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
            Project Name:
            <br/>
            <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)}/>
            <br/>
            Project Description:
            <br/>
            <textarea className="description" value={projectDescription} onChange={e => setProjectDescription(e.target.value)}/>
            <br/>
            Start Date:
            <br/>
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
            <div>
                <span>Is private:</span>
                <input
                    type="checkbox"
                    checked={isPrivate}
                    onClick={toggleIsPrivate}
                />
            </div>
            <br/>
        </>
    )
}

export default ProjectFields