import { TextField, Typography, InputAdornment } from "@mui/material";
import { useState } from "react";

const TextForm = ({
  label,
  span,
  data,
}: {
  label: string;
  span: string;
  data: string;
}) => {
  const [value, setValue] = useState<string>(data ? data : "");
  return (
    <div className={`col-span-${span}`}>
      <Typography className="s12">
        {label} <span className="pb-2 pl-1 text-t-red100">*</span>
      </Typography>
      <TextField
        className="input-form"
        value={value}
        onChange={(e) =>
          value.length < 50
            ? setValue(e.target.value)
            : setValue(e.target.value.slice(0, 50))
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ marginTop: "10px" }}>
              <Typography className="s12-gray">{value.length}/50</Typography>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TextForm;