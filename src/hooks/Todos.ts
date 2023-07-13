import { useMutation, useQuery } from '@tanstack/react-query';
import typeTodoApi from '../api/typeTodoApi';
import { EditTodo } from '../model/types';

//get table data
export const getTodosList = () => {
  return useQuery({
    queryKey: ['todosList'],
    queryFn: () => typeTodoApi.getTodolists(),
  });
};

//post edit todo with id
export const postEditTodo = (id: string) => {
  return useMutation((payload: EditTodo) =>
    typeTodoApi.postEditTodo(id, payload),
  );
};

//post add new  todo
export const postNewTodo = () => {
  return useMutation((payload: EditTodo) => typeTodoApi.postNewTodo(payload));
};

//delete todo
export const deleteTodo = () => {
  return useMutation((id: string) => typeTodoApi.deleteTodo(id));
};
