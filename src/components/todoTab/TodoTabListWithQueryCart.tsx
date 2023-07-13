import HeadTableTodo from './table/HeadTableTodo';
import BodyTableTodo from './table/BodyTableTodo';
import { TableContainer, Table, CircularProgress } from '@mui/material';
import { getTodosList } from '../../hooks/Todos';
import { catchErr } from '../../hooks/Accounts';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const TodoTabListWithQueryCart = () => {
  const { data, isLoading, error } = getTodosList();
  useEffect(() => {
    if (error) {
      catchErr(error);
    }
  }, [error]);

  return (
    <>
      <Toaster />

      {data && (
        <TableContainer className="scroll-style">
          <Table border={1}>
            <HeadTableTodo />
            <BodyTableTodo todosArray={data} />
          </Table>
        </TableContainer>
      )}
      {isLoading && (
        <div className="w-full p-8 h-full flex justify-center items-center">
          <CircularProgress size="lg" />
        </div>
      )}
    </>
  );
};
export default TodoTabListWithQueryCart;
