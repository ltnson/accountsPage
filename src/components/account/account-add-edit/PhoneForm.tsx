import {
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const PhoneForm = ({
  label,
  span,
  data,
}: {
  label: string;
  span: string;
  data: string;
}) => {
  const [value, setValue] = useState<string>(data ? data : "");
  const [phoneCode, setPhoneCode] = useState<string>("+84");
  return (
    <div className={`col-span-${span}`}>
      <Typography className="s12">
        {label} <span className="pb-2 pl-1 text-t-red100">*</span>
      </Typography>
      <TextField
        className="input-form"
        value={value}
        onChange={(e) =>
          value.length < 15
            ? setValue(e.target.value)
            : setValue(e.target.value.slice(0, 15))
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                sx={{ minWidth: "90px" }}
              >
                <MenuItem value="+84">+84</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
              </Select>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ marginTop: "10px" }}>
              <Typography className="s12-gray">{value.length}/15</Typography>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PhoneForm;
