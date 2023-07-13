import { useSelector } from 'react-redux';
import { showEditedQueryCartSelector } from '../../store/selects';
import TodoAddEditUsingCart from '../../components/todoTab/cart-form-edit/TodoAddEditUsingCart';
import TodoTabListWithQueryCart from '../../components/todoTab/TodoTabListWithQueryCart';

const TodoQueryCartTab = () => {
  const showEditedQueryCart = useSelector(showEditedQueryCartSelector);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo useQuery ,edit with Cart</h1>
      {showEditedQueryCart && <TodoAddEditUsingCart />}
      <TodoTabListWithQueryCart />
    </div>
  );
};
export default TodoQueryCartTab;
