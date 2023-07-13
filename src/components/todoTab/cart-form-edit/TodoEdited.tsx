import { postEditTodo, postNewTodo } from '../../../hooks/Todos';
import { catchErr } from '../../../hooks/Accounts';
import { toast, Toaster } from 'react-hot-toast';
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

const TodoEdited = ({ item }: { item: EditTodo }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [axiosLoading, setAxiosLoading] = useState<boolean>(false);
  const idTodoQuery = useSelector(idQueryEditSelector);
  const idTodoAxios = useSelector(idAxiosEditSelector);
  const { resetEditFormAxios, setIdTodoEditAxios, setShowEditedFormAxios } =
    todoAxiosSlice.actions;
  const { resetEditFormQuery, setIdTodoEditQuery, setShowEditedFormQuery } =
    todoQuerySlice.actions;

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
      dispatch(setIdTodoEditAxios('New'));
      dispatch(setShowEditedFormAxios(false));
      setAxiosLoading(false);
    } catch (err) {
      setAxiosLoading(false);
      catchErr(err);
    }
  };

  const todoMutation =
    idTodoQuery === 'New' ? postNewTodo() : postEditTodo(idTodoQuery);
  const handleUpdateTodo = () => {
    if (pathname === '/todoquery') {
      return todoMutation.mutate(item, {
        onSuccess: (data) => {
          toast.success(
            idTodoQuery === 'New'
              ? `Todo with Id : ${data} is created`
              : `${data}, Todo with Id : ${idTodoQuery} is updated`,
          );
          dispatch(resetEditFormQuery());
          dispatch(setIdTodoEditQuery('New'));
          dispatch(setShowEditedFormQuery(false));
        },
        onError: (err) => {
          catchErr(err);
        },
      });
    }
    updateTodoAxios();
  };

  return (
    <div className="border border-t-neutral/d2 p-4 rounded">
      <Toaster />
      <div className="grid grid-cols-4 text-base gap-4">
        <div>
          <Typography className="s14-gray">ID</Typography>
          <p className="break-words">
            {pathname === '/todoquery' ? idTodoQuery : idTodoAxios}
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
            Update Server ?
          </Button>
        )}
      </div>
    </div>
  );
};
export default TodoEdited;
