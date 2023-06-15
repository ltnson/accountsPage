import { TextField, Typography, MenuItem, Checkbox } from "@mui/material";
import { useState } from "react";

const FilterForm = ({ label, array }: { label: string; array?: string[] }) => {
  const [value, setValue] = useState<string>(array ? array[0] : "");

  return (
    <div>
      <Typography className="s14">
        <Checkbox size="small" />
        {label}
      </Typography>
      <TextField
        fullWidth
        className="filter-form"
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
export default FilterForm;
