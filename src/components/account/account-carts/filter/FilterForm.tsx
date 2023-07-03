import { useEffect, useState } from 'react';

import { TextField, Typography, MenuItem, Checkbox } from '@mui/material';

const FilterForm = ({
  label,
  array,
  onValue,
}: {
  label: string;
  array: string[];
  onValue: any;
}) => {
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [valueFilter, setValueFilter] = useState<string>(array[0]);

  useEffect(() => {
    if (checkBox) {
      onValue(valueFilter);
    }
  }, [checkBox, valueFilter]);

  return (
    <div>
      <Typography className="s14">
        <Checkbox
          size="small"
          className="filter"
          onChange={(e) => setCheckBox(e.target.checked)}
        />
        {label}
      </Typography>
      <TextField
        fullWidth
        className="filter-form"
        select
        value={valueFilter}
        onChange={(e) =>
          label !== 'Level' &&
          label !== 'Skill' &&
          label !== 'Contact Type' &&
          setValueFilter(e.target.value)
        }
      >
        {array.map((item: string, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
export default FilterForm;
