import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import CalendarSVG from "../../../assets/SVG/accountsSVG/CalendarSVG";

const DateForm = ({
  label,
  span,
  data,
}: {
  label: string;
  span: string;
  data: string;
}) => {
  const [value, setValue] = useState<string>(data ? data : "");
  const [showDate, setShowDate] = useState<boolean>(false);

  return (
    <div className={`col-span-${span}`}>
      <Typography className="s12">
        {label} <span className="pb-2 pl-1 text-t-red100">*</span>
      </Typography>
      <TextField
        className="input-form"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowDate(!showDate)}>
                <CalendarSVG />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box width="500px"></Box>
    </div>
  );
};

export default DateForm;
