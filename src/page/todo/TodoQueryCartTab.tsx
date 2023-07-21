import { useDispatch, useSelector } from 'react-redux';
import { showEditedQueryCartSelector } from '../../store/selects';
import TodoAddEditUsingCart from '../../components/todoTab/cart-form-edit/TodoAddEditUsingCart';
import TodoTabList from '../../components/todoTab/TodoTabList';

import { getTodosList } from '../../hooks/Todos';
import {
  idQueryCartEditSelector,
  todoQueryCartEditDataSelector,
} from '../../store/selects';
import { todoQueryCartSlice } from '../../store/slice/TodoQueryCartSlice';
import { useQueryClient } from '@tanstack/react-query';
import { postNewTodo, postEditTodo, reloadTodoKey } from '../../hooks/Todos';
import { EditTodo } from '../../model/types';

const TodoQueryCartTab = () => {
  const showEditedQueryCart = useSelector(showEditedQueryCartSelector);
  const getTodoListData = getTodosList();
  const dispatch = useDispatch();
  const idTodo = useSelector(idQueryCartEditSelector);
  const editData = useSelector(todoQueryCartEditDataSelector);
  const { resetEditFormQueryCart } = todoQueryCartSlice.actions;
  const queryClient = useQueryClient();
  const todoMutation = idTodo === 'New' ? postNewTodo() : postEditTodo(idTodo);

  const onSubmit = (data: EditTodo) => {
    todoMutation.mutate(data, {
      onSuccess: () => {
        dispatch(resetEditFormQueryCart());
        queryClient.invalidateQueries({ queryKey: reloadTodoKey });
      },
    });
  };

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Cart</h1>
      {showEditedQueryCart && (
        <TodoAddEditUsingCart
          editData={editData}
          handleUpdate={onSubmit}
          updateLoading={todoMutation.isLoading}
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
export default TodoQueryCartTab;
