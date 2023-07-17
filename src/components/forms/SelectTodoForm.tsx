import { Control, useController } from 'react-hook-form';

import { TextField, MenuItem } from '@mui/material';
import DownSelectSVG from '../../assets/SVG/accountsSVG/DownSelectSVG';
import LabelForm from './label-inputAdorment/LabelForm';
import { EditTodo } from '../../model/types';

const SelectTodoForm = ({
  label,
  control,
  name,
  newTodo,
}: {
  label: string;
  control: Control<EditTodo>;
  name: string;
  newTodo: boolean;
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: 'complete',
    control,
  });

  //change icon of select input and set value if client choosing
  return (
    <div>
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
