import { useController, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import LabelForm from './label-inputAdorment/LabelForm';
import InputAdornmentForm from './label-inputAdorment/InputAdormentForm';

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
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: name,
    defaultValue: '',
    control,
  });
  return (
    <div className={`col-span-${span}`}>
      <LabelForm label={label} />
      <TextField
        className="input-form"
        helperText={error ? error?.message : null}
        error={!!error}
        name={name}
        value={value}
        onChange={(e) =>
          value?.length < 50
            ? onChange(e.target.value)
            : onChange(e.target.value.slice(0, 50))
        }
        InputProps={{
          endAdornment: (
            <InputAdornmentForm
              length={value ? value.length : 0}
              totalLength={50}
            />
          ),
        }}
      />
    </div>
  );
};

export default TextForm;
