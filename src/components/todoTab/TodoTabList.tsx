import HeadTableTodo from './table/HeadTableTodo';
import BodyTableTodo from './table/BodyTableTodo';
import { TableContainer, Table, CircularProgress } from '@mui/material';
import { TodosList } from '../../model/types';

const TodoTabList = ({
  data,
  isLoading,
}: {
  data: TodosList | null;
  isLoading: boolean | undefined;
}) => {
  return (
    <>
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
export default TodoTabList;
