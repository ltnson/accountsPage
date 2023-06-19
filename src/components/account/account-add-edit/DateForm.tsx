import { Controller, useFormContext } from "react-hook-form";
import CalendarSVG from "../../../assets/SVG/accountsSVG/CalendarSVG";
import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import dayjs from "dayjs";
const icon = (props: any) => {
  return <CalendarSVG onClick={props.onClick} />;
};

const DateForm = ({
  name,
  label,
  span,
}: {
  name: string;
  label: string;
  span: string;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <div className={`col-span-${span}`}>
          <Typography className="s12">
            {label} <span className="pb-2 pl-1 text-t-red100">*</span>
          </Typography>
          <DatePicker
            slots={{
              openPickerButton: icon,
            }}
            className="input-form"
            value={dayjs(value)}
            onChange={(date: any) =>
              onChange(moment(date?.$d).format("MM/DD/YYYY"))
            }
            onError={(error: any) => console.log(error)}
          />
        </div>
      )}
    />
  );
};

export default DateForm;
