import { useController, useFormContext } from 'react-hook-form';

import { TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import DownSelectSVG from '../../assets/SVG/accountsSVG/DownSelectSVG';
import LabelForm from './label-inputAdorment/LabelForm';
import InputAdornmentForm from './label-inputAdorment/InputAdormentForm';

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
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: name,
    defaultValue: '+79',
    control,
  });

  return (
    <div className={`col-span-${span}`}>
      <LabelForm label={label} />
      <TextField
        className="input-form"
        helperText={error ? error?.message : null}
        name={name}
        error={!!error}
        //first of phone number
        value={value ? value.split(' ').slice(1).join(' ') : ''}
        // split and set end of phone number
        onChange={(e) =>
          value.replace(/\s/g, '').length < 18
            ? onChange(value.split(' ')[0] + ' ' + e.target.value)
            : onChange(value.split(' ')[0] + ' ' + e.target.value.slice(0, -1))
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={value.split(' ')[0]}
                //select first of phone number
                onChange={(e) =>
                  onChange(
                    value.split(' ')[1].includes('+') ||
                      value.split(' ')[1] === ''
                      ? e.target.value
                      : e.target.value + value.split(' ').slice(1).join(' '),
                  )
                }
                className="phone-form"
                IconComponent={DownSelectSVG}
              >
                <MenuItem value={value.split(' ')[0]}>
                  {value.split(' ')[0]}
                </MenuItem>
                <MenuItem value="+7 ">+7</MenuItem>
                <MenuItem value="+84 ">+84</MenuItem>
              </Select>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornmentForm
              length={value ? value.replace(/\s/g, '').length : 2}
              totalLength={18}
            />
          ),
        }}
      />
    </div>
  );
};

export default PhoneForm;
