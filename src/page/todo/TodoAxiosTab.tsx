import { useSelector, useDispatch } from 'react-redux';
import TodoEdited from '../../components/todoTab/cart-form-edit/TodoEdited';
import {
  showEditedAxiosSelector,
  todoAxiosEditDataSelector,
} from '../../store/selects';
import TodoTabList from '../../components/todoTab/TodoTabList';
import { useState, useEffect } from 'react';
import { TodosList } from '../../model/types';
import { reloadTodoSelector } from '../../store/selects';
import axiosTodos from '../../api/axiosTodos';
import { catchErr } from '../../hooks/Accounts';
import { todoAxiosSlice } from '../../store/slice/TodoAxiosSlice';

const TodoAxiosTab = () => {
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const itemEditedAxios = useSelector(todoAxiosEditDataSelector);
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
    if (reloadTodoAxios) {
      getTodoListData();
      dispatch(todoAxiosSlice.actions.setReloadTodo(false));
    }
    return;
  }, [reloadTodoAxios]);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo use Axios ,edit with Page</h1>
      {showEditedAxios && <TodoEdited item={itemEditedAxios} />}
      <TodoTabList
        data={todosList ? todosList : null}
        isLoading={axiosLoading}
      />
    </div>
  );
};
export default TodoAxiosTab;
