import { useState } from 'react';

import { TextField, MenuItem } from '@mui/material';
import DownSelectSVG from '../../assets/SVG/accountsSVG/DownSelectSVG';
import LabelForm from './label-inputAdorment/LabelForm';

const SelectForm = ({
  label,
  span,
  array,
}: {
  label: string;
  span: string;
  array?: string[];
}) => {
  const [value, setValue] = useState<string>(array ? array[0] : '');

  //change icon of select input and set value if client choosing
  return (
    <div className={`col-span-${span}`}>
      <LabelForm label={label} />
      <TextField
        className="input-form"
        value={value}
        select
        SelectProps={{
          IconComponent: DownSelectSVG,
        }}
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
