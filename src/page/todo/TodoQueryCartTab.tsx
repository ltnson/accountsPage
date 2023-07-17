import { useSelector } from 'react-redux';
import { showEditedQueryCartSelector } from '../../store/selects';
import TodoAddEditUsingCart from '../../components/todoTab/cart-form-edit/TodoAddEditUsingCart';
import TodoTabList from '../../components/todoTab/TodoTabList';
import { useEffect } from 'react';
import { catchErr } from '../../hooks/Accounts';
import { getTodosList } from '../../hooks/Todos';

const TodoQueryCartTab = () => {
  const showEditedQueryCart = useSelector(showEditedQueryCartSelector);
  const getTodoListData = getTodosList();
  useEffect(() => {
    if (getTodoListData.error) {
      catchErr(getTodoListData.error);
    }
  }, [getTodoListData.error]);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Cart</h1>
      {showEditedQueryCart && <TodoAddEditUsingCart />}
      <TodoTabList
        data={getTodoListData.data ? getTodoListData.data : null}
        isLoading={getTodoListData.isLoading}
      />
    </div>
  );
};
export default TodoQueryCartTab;
