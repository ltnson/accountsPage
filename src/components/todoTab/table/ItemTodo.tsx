import { Todo } from '../../../model/types';
import { useState } from 'react';

import { TableRow, TableCell, Checkbox } from '@mui/material';

import { useSelector } from 'react-redux';
import { allCheckboxSelector } from '../../../store/selects';

import ItemEditCell from './ItemEditCell';
import ItemDeleteCell from './ItemDeleteCell';

const ItemTodo = ({ item }: { item: Todo }) => {
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const allCheckbox = useSelector(allCheckboxSelector);

  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox
            size="small"
            checked={allCheckbox ? allCheckbox : checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        </TableCell>
        <TableCell>{item._id}</TableCell>
        <TableCell>{item.text}</TableCell>
        <TableCell>{item.author}</TableCell>
        <TableCell>
          <p
            className={
              item.complete
                ? 'bg-tag/green10 text-center rounded py-0.5 w-3/4'
                : 'text-center rounded py-0.5 w-3/4 bg-red/10'
            }
          >
            {item.complete ? 'Completed' : 'Unfinished'}
          </p>
        </TableCell>
        <TableCell>{item.createdDate}</TableCell>
        <TableCell>
          <ItemEditCell item={item} />
        </TableCell>
        <TableCell>
          <ItemDeleteCell item={item} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ItemTodo;
