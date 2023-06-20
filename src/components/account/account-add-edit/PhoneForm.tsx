import {
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const PhoneForm = ({
  name,
  label,
  span,
}: {
  name: string;
  label: string;
  span: string;
}) => {
  const { control } = useFormContext();
  const t = "kdhsfk ";
  console.log(
    t.slice(t.indexOf(t.split(" ")[1])),
    typeof t.slice(t.indexOf(t.split(" ")[1]))
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => (
        <div className={`col-span-${span}`}>
          <Typography className="s12">
            {label} <span className="pb-2 pl-1 text-t-red100">*</span>
          </Typography>
          <TextField
            className="input-form"
            helperText={error ? error?.message : null}
            name={name}
            error={!!error}
            value={
              value && value.slice(value.indexOf(value.split(" ")[1])) !== value
                ? value.slice(value.indexOf(value.split(" ")[1]))
                : ""
            }
            onChange={(e) =>
              value.replace(/\s/g, "").length <= 15
                ? onChange(
                    e.target.value
                      ? value.split(" ")[0] + " " + e.target.value
                      : value.split(" ")[0] + " "
                  )
                : onChange(
                    value.split(" ")[0] + " " + e.target.value.slice(0, 18)
                  )
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    value={value && value.split(" ")[0] + " "}
                    onChange={(e) =>
                      onChange(
                        e.target.value +
                          value.slice(value.indexOf(value.split(" ")[1]))
                      )
                    }
                    sx={{ minWidth: "90px" }}
                  >
                    {value && (
                      <MenuItem value={value.split(" ")[0] + " "}>
                        {value.split(" ")[0] + " "}
                      </MenuItem>
                    )}
                    <MenuItem value="+7 ">+7</MenuItem>
                    <MenuItem value="+84 ">+84</MenuItem>
                  </Select>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ marginTop: "10px" }}>
                  <Typography className="s12-gray">
                    {value.replace(/\s/g, "").length}/18
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </div>
      )}
    />
  );
};

export default PhoneForm;
