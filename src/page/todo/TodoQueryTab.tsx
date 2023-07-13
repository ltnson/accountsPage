import { useSelector } from 'react-redux';
import TodoEdited from '../../components/todoTab/cart-form-edit/TodoEdited';
import {
  showEditedQuerySelector,
  todoQueryEditDataSelector,
} from '../../store/selects';
import TodoTabListWithQuery from '../../components/todoTab/TodoTabListWithQuery';

const TodoQueryTab = () => {
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const itemEditedQuery = useSelector(todoQueryEditDataSelector);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Page</h1>
      {showEditedQuery && <TodoEdited item={itemEditedQuery} />}
      <TodoTabListWithQuery />
    </div>
  );
};
export default TodoQueryTab;
