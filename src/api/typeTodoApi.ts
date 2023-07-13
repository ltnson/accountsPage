import axiosTodos from './axiosTodos';
import { TodosList, EditTodo } from '../model/types';

const typeTodoApi = {
  getTodolists(): Promise<TodosList> {
    return axiosTodos.getTodoList();
  },
  postNewTodo(data: EditTodo): Promise<string> {
    return axiosTodos.postNewTodo(data);
  },
  postEditTodo(id: string, data: EditTodo): Promise<string> {
    return axiosTodos.postEditTodo(id, data);
  },
  deleteTodo(id: string): Promise<string> {
    return axiosTodos.deleteTodo(id);
  },
};

export default typeTodoApi;
