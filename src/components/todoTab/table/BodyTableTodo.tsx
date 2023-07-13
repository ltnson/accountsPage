import { TodosList } from '../../../model/types';
import ItemTodo from './ItemTodo';

import { TableBody } from '@mui/material';

const BodyTab = ({ todosArray }: { todosArray: TodosList }) => {
  return (
    <TableBody>
      {todosArray.map((dt, index) => (
        <ItemTodo key={index} item={dt} />
      ))}
    </TableBody>
  );
};

export default BodyTab;
