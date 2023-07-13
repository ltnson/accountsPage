import { useFormContext, useController } from 'react-hook-form';

import { TextField, MenuItem } from '@mui/material';
import DownSelectSVG from '../../assets/SVG/accountsSVG/DownSelectSVG';
import LabelForm from './label-inputAdorment/LabelForm';

const SelectTodoForm = ({
  label,
  span,
  name,
  newTodo,
}: {
  label: string;
  span: string;
  name: string;
  newTodo: boolean;
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });

  //change icon of select input and set value if client choosing
  return (
    <div className={`col-span-${span}`}>
      <LabelForm label={label} />
      <TextField
        className="input-form"
        helperText={error ? error?.message : null}
        error={!!error}
        select
        value={value ? 'Completed' : 'Unfinished'}
        disabled={newTodo}
        name={name}
        SelectProps={{
          IconComponent: DownSelectSVG,
        }}
        onChange={(e) =>
          onChange(e.target.value === 'Completed' ? true : false)
        }
      >
        {!newTodo && <MenuItem value="Completed">Completed</MenuItem>}
        <MenuItem value="Unfinished">Unfinished</MenuItem>
      </TextField>
    </div>
  );
};
export default SelectTodoForm;
