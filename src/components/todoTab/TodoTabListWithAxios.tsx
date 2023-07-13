import HeadTableTodo from './table/HeadTableTodo';
import BodyTableTodo from './table/BodyTableTodo';
import { TableContainer, Table, CircularProgress } from '@mui/material';
import { catchErr } from '../../hooks/Accounts';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { TodosList } from '../../model/types';
import axiosTodos from '../../api/axiosTodos';
import { useDispatch, useSelector } from 'react-redux';
import { reloadTodoSelector } from '../../store/selects';
import { todoAxiosSlice } from '../../store/slice/TodoAxiosSlice';

const TodoTabListWithAxios = () => {
  const [todosList, setTodosList] = useState<TodosList | null>(null);
  const [axiosLoading, setAxiosLoading] = useState<boolean>(true);
  const reloadTodoAxios = useSelector(reloadTodoSelector);
  const dispatch = useDispatch();

  const getTodoListData = async () => {
    try {
      const data = await axiosTodos.getTodoList();
      if (data) {
        setTodosList(data);
        setAxiosLoading(false);
      }
    } catch (err) {
      catchErr(err);
      setAxiosLoading(false);
    }
  };

  useEffect(() => {
    getTodoListData();
  }, []);

  useEffect(() => {
    console.log(reloadTodoAxios);
    if (reloadTodoAxios) {
      getTodoListData();
      dispatch(todoAxiosSlice.actions.setReloadTodo(false));
    }
    return;
  }, [reloadTodoAxios]);

  return (
    <>
      <Toaster />
      {todosList && (
        <TableContainer className="scroll-style">
          <Table border={1}>
            <HeadTableTodo />
            <BodyTableTodo todosArray={todosList} />
          </Table>
        </TableContainer>
      )}
      {axiosLoading && (
        <div className="w-full p-8 h-full flex justify-center items-center">
          <CircularProgress size="lg" />
        </div>
      )}
    </>
  );
};
export default TodoTabListWithAxios;
