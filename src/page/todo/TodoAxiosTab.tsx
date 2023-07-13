import { useSelector } from 'react-redux';
import TodoEdited from '../../components/todoTab/cart-form-edit/TodoEdited';
import {
  showEditedAxiosSelector,
  todoAxiosEditDataSelector,
} from '../../store/selects';
import TodoTabListWithAxios from '../../components/todoTab/TodoTabListWithAxios';

const TodoAxiosTab = () => {
  const showEditedAxios = useSelector(showEditedAxiosSelector);

  const itemEditedAxios = useSelector(todoAxiosEditDataSelector);

  return (
    <div className="bg-white w-full h-full rounded-xl flex flex-col gap-6 p-6">
      <h1 className="text-2xl">Todo use Axios ,edit with Page</h1>
      {showEditedAxios && <TodoEdited item={itemEditedAxios} />}
      <TodoTabListWithAxios />
    </div>
  );
};
export default TodoAxiosTab;
