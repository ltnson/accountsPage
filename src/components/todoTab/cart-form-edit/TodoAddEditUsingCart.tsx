import { useForm, FormProvider } from 'react-hook-form';
import LabelForm from '../../forms/label-inputAdorment/LabelForm';
import TextForm from '../../forms/TextForm';
import SelectTodoForm from '../../forms/SelectTodoForm';
import { EditTodo } from '../../../model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaTodo } from '../../../util/yupSchema';
import { Button, LinearProgress } from '@mui/material';
import { postEditTodo, postNewTodo } from '../../../hooks/Todos';
import { useDispatch, useSelector } from 'react-redux';
import {
  idQueryCartEditSelector,
  todoQueryCartEditDataSelector,
} from '../../../store/selects';
import { catchErr } from '../../../hooks/Accounts';
import { toast } from 'react-hot-toast';
import { todoQueryCartSlice } from '../../../store/slice/TodoQueryCartSlice';
import CloseSVG from '../../../assets/SVG/accountsSVG/CloseSVG';

const TodoAddEditUsingCart = () => {
  const dispatch = useDispatch();
  const idTodo = useSelector(idQueryCartEditSelector);
  const editData = useSelector(todoQueryCartEditDataSelector);
  const formTodo = useForm<EditTodo>({
    resolver: yupResolver(schemaTodo),
    defaultValues: editData,
    mode: 'onChange',
  });

  const todoMutation = idTodo === 'New' ? postNewTodo() : postEditTodo(idTodo);

  const { handleSubmit } = formTodo;
  const onSubmit = (data: EditTodo) => {
    todoMutation.mutate(data, {
      onSuccess: (result) => {
        toast.success(`${result}, Todo with id ${idTodo} is Succes`);
        dispatch(todoQueryCartSlice.actions.resetEditForm());
        dispatch(todoQueryCartSlice.actions.setIdTodoEdit('New'));
        dispatch(todoQueryCartSlice.actions.setShowEditedForm(false));
      },
      onError: (err) => {
        catchErr(err);
      },
    });
  };
  return (
    <div
      className="bg-cart"
      onClick={() =>
        dispatch(todoQueryCartSlice.actions.setShowEditedForm(false))
      }
    >
      <FormProvider {...formTodo}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 flex flex-col gap-6 bg-white p-8 rounded relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute sm:top-8 sm:right-9 top-6 right-8"
            onClick={() =>
              dispatch(todoQueryCartSlice.actions.setShowEditedForm(false))
            }
          >
            <CloseSVG />
          </div>
          <div>
            <LabelForm label="ID Todo" />
            <p className="font-bold">{idTodo}</p>
          </div>
          <TextForm label="Text" name="text" span="1" />
          <SelectTodoForm
            label="Complete"
            name="complete"
            span="1"
            newTodo={idTodo === 'New' ? true : false}
          />
          <TextForm label="Author" name="author" span="1" />
          {todoMutation.isLoading ? (
            <LinearProgress />
          ) : (
            <Button className="save col-span-2" type="submit">
              Save
            </Button>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default TodoAddEditUsingCart;
