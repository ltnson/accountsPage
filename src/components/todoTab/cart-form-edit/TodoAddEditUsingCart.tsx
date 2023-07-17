import { useForm } from 'react-hook-form';
import LabelForm from '../../forms/label-inputAdorment/LabelForm';
import TextTodoForm from '../../forms/TextTodoForm';
import SelectTodoForm from '../../forms/SelectTodoForm';
import { EditTodo } from '../../../model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaTodo } from '../../../util/yupSchema';
import { Button, LinearProgress } from '@mui/material';
import { postEditTodo, postNewTodo, reloadTodoKey } from '../../../hooks/Todos';
import { useDispatch, useSelector } from 'react-redux';
import {
  idQueryCartEditSelector,
  todoQueryCartEditDataSelector,
} from '../../../store/selects';
import { todoQueryCartSlice } from '../../../store/slice/TodoQueryCartSlice';
import CloseSVG from '../../../assets/SVG/accountsSVG/CloseSVG';
import { useQueryClient } from '@tanstack/react-query';

const TodoAddEditUsingCart = () => {
  const dispatch = useDispatch();
  const idTodo = useSelector(idQueryCartEditSelector);
  const editData = useSelector(todoQueryCartEditDataSelector);
  const { resetEditFormQueryCart } = todoQueryCartSlice.actions;
  const queryClient = useQueryClient();

  const formTodo = useForm<EditTodo>({
    resolver: yupResolver(schemaTodo),
    defaultValues: editData,
    mode: 'onBlur',
  });

  const todoMutation = idTodo === 'New' ? postNewTodo() : postEditTodo(idTodo);

  const { handleSubmit, control } = formTodo;
  const onSubmit = (data: EditTodo) => {
    todoMutation.mutate(data, {
      onSuccess: () => {
        dispatch(resetEditFormQueryCart());
        queryClient.invalidateQueries({ queryKey: reloadTodoKey });
      },
    });
  };
  return (
    <div className="bg-cart" onClick={() => dispatch(resetEditFormQueryCart())}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-6 bg-white p-8 rounded relative"
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
        {todoMutation.isLoading ? (
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
