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
import { idAxiosEditSelector } from '../../store/selects';
import { toast } from 'react-hot-toast';

const TodoAxiosTab = () => {
  const dispatch = useDispatch();
  const showEdited = useSelector(showEditedAxiosSelector);
  const itemEdited = useSelector(todoAxiosEditDataSelector);
  const [todosList, setTodosList] = useState<TodosList | null>(null);
  const [loadingList, setLoadingList] = useState<boolean>(true);
  const reloadTodoAxios = useSelector(reloadTodoSelector);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const idTodo = useSelector(idAxiosEditSelector);
  const { resetEditFormAxios, setReloadTodo } = todoAxiosSlice.actions;

  const handleUpdateTodo = async () => {
    try {
      setUpdateLoading(true);
      if (idTodo === 'New') {
        toast.success(
          `Todo with Id : ${await axiosTodos.postNewTodo(
            itemEdited,
          )} is created`,
        );
      } else {
        toast.success(
          `${await axiosTodos.postEditTodo(
            idTodo,
            itemEdited,
          )},Todo with Id: ${idTodo} is updated`,
        );
      }
      dispatch(resetEditFormAxios());
      dispatch(setReloadTodo(true));
      setUpdateLoading(false);
    } catch (err) {
      setUpdateLoading(false);
      catchErr(err);
    }
  };

  const getTodoListData = async () => {
    try {
      const data = await axiosTodos.getTodoList();
      if (data) {
        setTodosList(data);
        setLoadingList(false);
      }
    } catch (err) {
      catchErr(err);
      setLoadingList(false);
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
      {showEdited && (
        <TodoEdited
          item={itemEdited}
          updateLoading={updateLoading}
          handleUpdate={handleUpdateTodo}
          idTodo={idTodo}
        />
      )}
      <TodoTabList
        data={todosList ? todosList : null}
        isLoading={loadingList}
      />
    </div>
  );
};
export default TodoAxiosTab;
