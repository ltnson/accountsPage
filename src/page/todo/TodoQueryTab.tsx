import { useSelector } from 'react-redux';
import TodoEdited from '../../components/todoTab/cart-form-edit/TodoEdited';
import {
  showEditedQuerySelector,
  todoQueryEditDataSelector,
} from '../../store/selects';
import TodoTabList from '../../components/todoTab/TodoTabList';
import { useEffect } from 'react';
import { catchErr } from '../../hooks/Accounts';
import { getTodosList } from '../../hooks/Todos';

const TodoQueryTab = () => {
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const itemEditedQuery = useSelector(todoQueryEditDataSelector);
  const getTodoListData = getTodosList();

  useEffect(() => {
    if (getTodoListData.error) {
      catchErr(getTodoListData.error);
    }
  }, [getTodoListData.error]);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Page</h1>
      {showEditedQuery && <TodoEdited item={itemEditedQuery} />}
      <TodoTabList
        data={getTodoListData.data ? getTodoListData.data : null}
        isLoading={getTodoListData.isLoading}
      />
    </div>
  );
};
export default TodoQueryTab;
