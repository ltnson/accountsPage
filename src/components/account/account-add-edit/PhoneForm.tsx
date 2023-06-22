import { Controller, useFormContext } from 'react-hook-form';

import {
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from '@mui/material';

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
  const setPhoneCode = (value: string) => {
    if (value.split(' ')[1] === undefined) {
      return value;
    }
    return value.split(' ')[0] + ' ';
  };
  const selectPhoneCode = (value: string, e: string) => {
    if (value.split(' ')[1] === undefined || value.split(' ')[1] === '') {
      return e + ' ';
    }
    return e + ' ' + value.slice(value.indexOf(value.split(' ')[1]));
  };
  const setPhoneNumb = (value: string) => {
    if (value.split(' ')[1] === undefined || value.split(' ')[1] === '') {
      return '';
    }
    return value.slice(value.indexOf(value.split(' ')[1]));
  };
  const changePhoneNumb = (value: string, e: string) => {
    if (e.length > 0) {
      return value.split(' ')[0] + ' ' + e;
    }
    return value.split(' ')[0];
  };

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
            value={setPhoneNumb(value)}
            onChange={(e) =>
              e.target.value.length < 19
                ? onChange(changePhoneNumb(value, e.target.value))
                : onChange(changePhoneNumb(value, e.target.value.slice(0, -1)))
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    value={setPhoneCode(value)}
                    onChange={(e) =>
                      onChange(selectPhoneCode(value, e.target.value))
                    }
                    sx={{ minWidth: '90px' }}
                  >
                    <MenuItem value={setPhoneCode(value)}>
                      {setPhoneCode(value)}
                    </MenuItem>
                    <MenuItem value="+7 ">+7</MenuItem>
                    <MenuItem value="+84 ">+84</MenuItem>
                  </Select>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ marginTop: '10px' }}>
                  <Typography className="s12-gray">
                    {value.replace(/\s/g, '').length}/18
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
