import { useDispatch, useSelector } from 'react-redux';
import TodoEdited from '../../components/todoTab/cart-form-edit/TodoEdited';
import {
  showEditedQuerySelector,
  todoQueryEditDataSelector,
} from '../../store/selects';
import TodoTabList from '../../components/todoTab/TodoTabList';
import { getTodosList } from '../../hooks/Todos';
import { idQueryEditSelector } from '../../store/selects';
import { useQueryClient } from '@tanstack/react-query';
import { todoQuerySlice } from '../../store/slice/TodoQuerySlice';
import { postNewTodo, postEditTodo, reloadTodoKey } from '../../hooks/Todos';

const TodoQueryTab = () => {
  const showEdited = useSelector(showEditedQuerySelector);
  const itemEdited = useSelector(todoQueryEditDataSelector);
  const getTodoListData = getTodosList();
  const idTodo = useSelector(idQueryEditSelector);
  const { resetEditFormQuery } = todoQuerySlice.actions;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const todoMutation = idTodo === 'New' ? postNewTodo() : postEditTodo(idTodo);
  const handleUpdateTodo = () => {
    todoMutation.mutate(itemEdited, {
      onSuccess: () => {
        dispatch(resetEditFormQuery());
        queryClient.invalidateQueries({ queryKey: reloadTodoKey });
      },
    });
  };

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Page</h1>
      {showEdited && (
        <TodoEdited
          item={itemEdited}
          updateLoading={todoMutation.isLoading}
          handleUpdate={handleUpdateTodo}
          idTodo={idTodo}
        />
      )}
      <TodoTabList
        data={getTodoListData?.data ? getTodoListData.data : null}
        isLoading={getTodoListData?.isLoading}
      />
    </div>
  );
};
export default TodoQueryTab;
