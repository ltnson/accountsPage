import { Typography } from "@mui/material";

import CalendarSVG from "../../../assets/SVG/accountsSVG/CalendarSVG";
import { DatePicker } from "@mui/x-date-pickers";

const icon = (props: any) => {
  return <CalendarSVG onClick={props.onClick} />;
};

const DateForm = ({ label, span }: { label: string; span: string }) => {
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
      />
    </div>
  );
};

export default DateForm;
