import React, {useEffect, useState} from "react";

interface NoEquationFieldsProps {
    setProjectName: (projectName: string) => void;
    setProjectDescription: (projectDescription: string) => void;
    setIsPrivate: (isPrivate: boolean) => void;
}
const NoEquationFields = (props: NoEquationFieldsProps) => {
    const [projectName, setProjectName] = useState<string>('')
    const [projectDescription, setProjectDescription] = useState<string>('')
    const [isPrivate, setIsPrivate] = useState(false);
    const toggleIsPrivate = () => {setIsPrivate(!isPrivate);}

    useEffect(() => {
        props.setProjectName(projectName);
        props.setProjectDescription(projectDescription);
        props.setIsPrivate(isPrivate);
    }, [projectName, projectDescription, isPrivate]);
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
         <div>
             <span>Is Private:</span>
             <input
                 type="checkbox"
                 checked={isPrivate}
                 onClick={toggleIsPrivate}
             />
         </div>
     </>

  );
};
export default NoEquationFields;