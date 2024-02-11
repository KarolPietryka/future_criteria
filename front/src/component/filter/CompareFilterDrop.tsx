import React, {Dispatch, SetStateAction, useState} from "react";
import {ProjectModel} from "../project/Project.model";

export enum CompareFilter {
    LESS_OR_EQUAL = '<=',
    LESS_THEN = '<',
    EQUAL = '==',
    GREATER_THEN = '>',
    GREATER_OR_EQUAL = '>='
}

interface CompareFilterDropProps {
    setFilterType: Dispatch<SetStateAction<CompareFilter>>
}

const CompareFilterDrop = (props: CompareFilterDropProps) => {

    const [value, setValue] = useState<string>(CompareFilter.LESS_THEN);
    const handleSelect = (value: string) => {
        setValue(value);
        let compareFilter: CompareFilter = CompareFilter[value as keyof typeof CompareFilter];
        props.setFilterType(compareFilter);
    };
    return (
        <div className="filter-drop">
            <select value={value} onChange={e => handleSelect(e.target.value)}>
                <option value={CompareFilter.LESS_OR_EQUAL}>{CompareFilter.LESS_OR_EQUAL}</option>
                <option value={CompareFilter.LESS_THEN}>{CompareFilter.LESS_THEN}</option>
                <option value={CompareFilter.EQUAL}>{CompareFilter.EQUAL}</option>
                <option value={CompareFilter.GREATER_THEN}>{CompareFilter.GREATER_THEN}</option>
                <option value={CompareFilter.GREATER_OR_EQUAL}>{CompareFilter.GREATER_OR_EQUAL}</option>
            </select>
        </div>
    )
}
export default CompareFilterDrop;