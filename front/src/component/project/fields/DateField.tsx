import React, {useEffect, useState} from "react";
import CompareFilterDrop, {CompareFilter} from "../../filter/CompareFilterDrop";
import DatePicker from "react-datepicker";

interface DateFieldProps {
  name: string;
  setDate: (date: Date) => void;
  setFilterType: (filterType: CompareFilter) => void;
  filterMode: boolean;
}
const DateField = (props: DateFieldProps) => {
  const [data, setData] = useState(new Date());
  const [filterType, setFilterType] = useState<CompareFilter>(CompareFilter.LESS_THEN);

  useEffect(() => {
    props.setDate(data);
    props.setFilterType(filterType);
  }, [data, filterType]);

  return (
      <>
        {props.name}:
        <div style={{display: "flex"}}>
          {props.filterMode &&
              <CompareFilterDrop setFilterType={setFilterType}/>
          }
          <DatePicker className="dataPicker"
                      selected={data}
                      onChange={(date) => setData(date || new Date())}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </>
  );
}
export default DateField;