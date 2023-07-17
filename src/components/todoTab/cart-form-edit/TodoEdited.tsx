import { postEditTodo, postNewTodo, reloadTodoKey } from '../../../hooks/Todos';
import { catchErr } from '../../../hooks/Accounts';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { todoQuerySlice } from '../../../store/slice/TodoQuerySlice';
import {
  idAxiosEditSelector,
  idQueryEditSelector,
} from '../../../store/selects';
import { Button, LinearProgress, Typography } from '@mui/material';
import { EditTodo } from '../../../model/types';
import { useLocation } from 'react-router-dom';
import axiosTodos from '../../../api/axiosTodos';
import { useState } from 'react';
import { todoAxiosSlice } from '../../../store/slice/TodoAxiosSlice';
import { useQueryClient } from '@tanstack/react-query';

const TodoEdited = ({ item }: { item: EditTodo }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [axiosLoading, setAxiosLoading] = useState<boolean>(false);
  const idTodoQuery = useSelector(idQueryEditSelector);
  const idTodoAxios = useSelector(idAxiosEditSelector);
  const { resetEditFormAxios, setReloadTodo } = todoAxiosSlice.actions;
  const { resetEditFormQuery } = todoQuerySlice.actions;
  const queryClient = useQueryClient();
  const idTodo = pathname === '/todo-query' ? idTodoQuery : idTodoAxios;

  const updateTodoAxios = async () => {
    try {
      setAxiosLoading(true);
      if (idTodoAxios === 'New') {
        toast.success(
          `Todo with Id : ${await axiosTodos.postNewTodo(item)} is created`,
        );
      } else {
        toast.success(
          `${await axiosTodos.postEditTodo(
            idTodoAxios,
            item,
          )},Todo with Id: ${idTodoAxios} is updated`,
        );
      }
      dispatch(resetEditFormAxios());
      dispatch(setReloadTodo(true));
      setAxiosLoading(false);
    } catch (err) {
      setAxiosLoading(false);
      catchErr(err);
    }
  };

  const todoMutation =
    idTodoQuery === 'New' ? postNewTodo() : postEditTodo(idTodoQuery);
  const handleUpdateTodo = () => {
    if (pathname === '/todo-query') {
      return todoMutation.mutate(item, {
        onSuccess: () => {
          dispatch(resetEditFormQuery());
          queryClient.invalidateQueries({ queryKey: reloadTodoKey });
        },
      });
    }
    updateTodoAxios();
  };

  return (
    <div className="border border-t-neutral/d2 p-4 rounded">
      <div className="grid grid-cols-4 text-base gap-4">
        <div>
          <Typography className="s14-gray">ID</Typography>
          <p
            className={`break-words ${
              idTodo === 'New' ? 'text-t-green' : 'text-t-red'
            }`}
          >
            {idTodo}
          </p>
        </div>
        <div>
          <Typography className="s14-gray">Text</Typography>
          <p>{item.text}</p>
        </div>
        <div>
          <Typography className="s14-gray">Complete</Typography>
          <p className={item.complete ? 'text-t-green' : 'text-t-red'}>
            {item.complete ? 'Completed' : 'Unfinished'}
          </p>
        </div>
        <div>
          <Typography className="s14-gray">Author</Typography>
          <p>{item.author}</p>
        </div>
      </div>
      <div className="w-1/3 pt-8">
        {todoMutation.isLoading || axiosLoading ? (
          <LinearProgress />
        ) : (
          <Button className="navbar" onClick={handleUpdateTodo}>
            {idTodo === 'New' ? 'Create New Todo ?' : 'Update Todo ?'}
          </Button>
        )}
      </div>
    </div>
  );
};
export default TodoEdited;
