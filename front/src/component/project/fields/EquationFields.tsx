import DatePicker from "react-datepicker";
import React, {useState} from "react";
import CompareFilterDrop, {CompareFilter} from "../../filter/CompareFilterDrop";
import DateField from "./DateField";

interface EquationFieldsProps {
    setStartDate: (startDate: Date) => void;
    setEndDate: (endDate: Date) => void;
    filterMode: boolean;
}
const EquationFields = (props: EquationFieldsProps) => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDateFilterType, setStartDateFilterType] = useState<CompareFilter>(CompareFilter.GREATER_THEN);
    const [endDate, setEndDate] = useState(new Date())
    const [endDateFilterType, setEndDateFilterType] = useState<CompareFilter>(CompareFilter.LESS_THEN);

    return (
        <div>
            <DateField
                name="Start Date"
                setDate={setStartDate}
                setFilterType={setStartDateFilterType}
                filterMode={props.filterMode}/>
            <DateField
                name="End Date"
                setDate={setEndDate}
                setFilterType={setEndDateFilterType}
                filterMode={props.filterMode}/>
        </div>
    );
}
export default EquationFields;