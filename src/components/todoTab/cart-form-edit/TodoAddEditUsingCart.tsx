import { useForm } from 'react-hook-form';
import LabelForm from '../../forms/label-inputAdorment/LabelForm';
import TextTodoForm from '../../forms/TextTodoForm';
import SelectTodoForm from '../../forms/SelectTodoForm';
import { EditTodo } from '../../../model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaTodo } from '../../../util/yupSchema';
import { Button, LinearProgress } from '@mui/material';
import { useDispatch } from 'react-redux';

import { todoQueryCartSlice } from '../../../store/slice/TodoQueryCartSlice';
import CloseSVG from '../../../assets/SVG/accountsSVG/CloseSVG';

const TodoAddEditUsingCart = ({
  editData,
  idTodo,
  handleUpdate,
  updateLoading,
}: {
  editData: EditTodo;
  idTodo: string;
  handleUpdate: (data: EditTodo) => void;
  updateLoading: boolean;
}) => {
  const dispatch = useDispatch();
  const { resetEditFormQueryCart } = todoQueryCartSlice.actions;
  const formTodo = useForm<EditTodo>({
    resolver: yupResolver(schemaTodo),
    defaultValues: editData,
    mode: 'onBlur',
  });
  const { handleSubmit, control } = formTodo;

  return (
    <div className="bg-cart" onClick={() => dispatch(resetEditFormQueryCart())}>
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="w-1/2 flex flex-col gap-6 bg-white p-8 rounded relative"
        // hàm chặn sự tác động đến phần tử cha ,chỉ dùng được trong thẻ đó
        // ,hàm bên ngoài khi client bấm vào background sẽ tự động đóng cart
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute sm:top-8 sm:right-9 top-6 right-8"
          onClick={() => dispatch(resetEditFormQueryCart())}
        >
          <CloseSVG />
        </div>
        <div>
          <LabelForm label="ID Todo" />
          <p className="font-bold">{idTodo}</p>
        </div>
        <TextTodoForm label="Text" name="text" control={control} />
        <SelectTodoForm
          label="Complete"
          name="complete"
          control={control}
          newTodo={idTodo === 'New' ? true : false}
        />
        <TextTodoForm label="Author" name="author" control={control} />
        {updateLoading ? (
          <LinearProgress />
        ) : (
          <Button className="save col-span-2" type="submit">
            {idTodo === 'New' ? 'Create' : 'Save'}
          </Button>
        )}
      </form>
    </div>
  );
};

export default TodoAddEditUsingCart;
