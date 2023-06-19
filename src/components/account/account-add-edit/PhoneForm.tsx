import {
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const PhoneForm = ({
  label,
  span,
  data,
  onValue,
}: {
  label: string;
  span: string;
  data?: string;
  onValue: any;
}) => {
  const [value, setValue] = useState<string>("");
  const [phoneCode, setPhoneCode] = useState<string>("+84");

  useEffect(() => {
    if (data) {
      const secondPart = data.split(" ")[1];
      const remainingPart = data.slice(data.indexOf(secondPart));
      setValue(remainingPart);
      const firstPart = data?.split(" ")[0];
      setPhoneCode(firstPart);
    }
  }, [data]);

  useEffect(() => {
    onValue(phoneCode + value);
  }, [value, phoneCode]);

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
                <MenuItem value={phoneCode}>{phoneCode}</MenuItem>
                <MenuItem value="+7">+7</MenuItem>
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
