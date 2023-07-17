import { useController, Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import LabelForm from './label-inputAdorment/LabelForm';
import InputAdornmentForm from './label-inputAdorment/InputAdormentForm';
import { EditTodo } from '../../model/types';

const TextTodoForm = ({
  name,
  label,
  control,
}: {
  name: 'text' | 'author';
  label: string;
  control: Control<EditTodo>;
}) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });
  return (
    <div>
      <LabelForm label={label} />
      <TextField
        className="input-form"
        helperText={error ? error?.message : null}
        error={!!error}
        name={name}
        value={value}
        inputRef={ref}
        onChange={(e) =>
          value?.length < 50
            ? onChange(e.target.value)
            : onChange(e.target.value.slice(0, 50))
        }
        InputProps={{
          endAdornment: (
            <InputAdornmentForm
              length={value ? value.length : 0}
              totalLength={25}
            />
          ),
        }}
      />
    </div>
  );
};

export default TextTodoForm;
