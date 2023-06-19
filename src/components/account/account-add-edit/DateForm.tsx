import { Typography } from "@mui/material";

import CalendarSVG from "../../../assets/SVG/accountsSVG/CalendarSVG";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
const icon = (props: any) => {
  return <CalendarSVG onClick={props.onClick} />;
};

const DateForm = ({
  label,
  span,
  date,
}: {
  label: string;
  span: string;
  date: Date;
}) => {
  const [datePick, setDatePick] = useState<string>(
    moment(date).format("MM/DD/YYYY")
  );
  useEffect(() => {
    setDatePick(moment(date).format("MM/DD/YYYY"));
  }, [date]);
  return (
    <div className={`col-span-${span}`}>
      <Typography className="s12">
        {label} <span className="pb-2 pl-1 text-t-red100">*</span>
      </Typography>
      <DatePicker
        slots={{
          openPickerButton: icon,
        }}
        className="input-form"
        value={dayjs(datePick, "MM/DD/YYYY")}
        onChange={(date: any) =>
          setDatePick(moment(date?.$d).format("MM/DD/YYYY"))
        }
      />
    </div>
  );
};

export default DateForm;
