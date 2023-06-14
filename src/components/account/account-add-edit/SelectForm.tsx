import { TextField, Typography, MenuItem } from "@mui/material";
import { useState } from "react";

const SelectForm = ({
  label,
  span,
  array,
}: {
  label: string;
  span: string;
  array?: string[];
}) => {
  const [value, setValue] = useState<string>(array ? array[0] : "");

  return (
    <div className={`col-span-${span}`}>
      <Typography className="s12">
        {label} <span className="pb-2 pl-1 text-t-red100">*</span>
      </Typography>
      <TextField
        className="input-form"
        value={value}
        select
        onChange={(e) => setValue(e.target.value)}
      >
        {array?.map((item: string, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
export default SelectForm;