import { TextField, Typography, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const TextForm = ({
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
            value={value}
            onChange={(e) =>
              value?.length < 50
                ? onChange(e.target.value)
                : onChange(e.target.value.slice(0, 50))
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ marginTop: "10px" }}>
                  <Typography className="s12-gray">
                    {value?.length}/50
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

export default TextForm;
