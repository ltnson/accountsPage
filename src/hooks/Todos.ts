import { useMutation, useQuery } from '@tanstack/react-query';
import typeTodoApi from '../api/typeTodoApi';
import { EditTodo } from '../model/types';
import { catchErr } from './Accounts';
import { toast } from 'react-hot-toast';

export const reloadTodoKey: string[] = ['todosList'];

//get table data
export const getTodosList = () => {
  return useQuery({
    queryKey: ['todosList'],
    queryFn: () => typeTodoApi.getTodolists(),
    onError: (err: any) => catchErr(err),
  });
};

//post edit todo with id
export const postEditTodo = (id: string) => {
  return useMutation(
    (payload: EditTodo) => typeTodoApi.postEditTodo(id, payload),
    {
      onSuccess: (data) =>
        toast.success(`${data}, Todo with Id : ${id} is updated`),
      onError: (err) => catchErr(err),
    },
  );
};

//post add new  todo
export const postNewTodo = () => {
  return useMutation((payload: EditTodo) => typeTodoApi.postNewTodo(payload), {
    onSuccess: (data) => toast.success(`Todo with Id : ${data} is created`),
    onError: (err) => catchErr(err),
  });
};

//delete todo
export const deleteTodo = () => {
  return useMutation((id: string) => typeTodoApi.deleteTodo(id), {
    onSuccess: (data) => toast.success(`${data}, Todo is deleted`),
    onError: (err) => catchErr(err),
  });
};
