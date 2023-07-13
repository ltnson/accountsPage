import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditTodo } from '../../model/types';
import { schemaTodo } from '../../util/yupSchema';
import TextForm from '../../components/forms/TextForm';
import SelectTodoForm from '../../components/forms/SelectTodoForm';
import LabelForm from '../../components/forms/label-inputAdorment/LabelForm';
import { Button } from '@mui/material';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { todoQuerySlice } from '../../store/slice/TodoQuerySlice';
import {
  todoQueryEditDataSelector,
  todoAxiosEditDataSelector,
} from '../../store/selects';
import { todoAxiosSlice } from '../../store/slice/TodoAxiosSlice';

const TodoQueryForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editQueryData = useSelector(todoQueryEditDataSelector);
  const editAxiosData = useSelector(todoAxiosEditDataSelector);
  const formTodo = useForm<EditTodo>({
    resolver: yupResolver(schemaTodo),
    defaultValues: pathname.includes('/todoquery')
      ? editQueryData
      : editAxiosData,
  });
  const { idTodoParams } = useParams();

  const { handleSubmit } = formTodo;
  const onSubmit = (data: EditTodo) => {
    if (pathname.includes('/todoquery')) {
      if (idTodoParams) {
        dispatch(todoQuerySlice.actions.setIdTodoEdit(idTodoParams));
      }
      dispatch(todoQuerySlice.actions.setEditForm(data));
      dispatch(todoQuerySlice.actions.setShowEditedForm(true));
      return navigate('/todoquery');
    }
    if (idTodoParams) {
      dispatch(todoAxiosSlice.actions.setIdTodoEdit(idTodoParams));
    }
    dispatch(todoAxiosSlice.actions.setEditForm(data));
    dispatch(todoAxiosSlice.actions.setShowEditedForm(true));
    navigate('/todoaxios');
  };

  return (
    <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
      <FormProvider {...formTodo}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 flex flex-col gap-6"
        >
          <div>
            <LabelForm label="ID Todo" />
            <p className="font-bold">{idTodoParams ? idTodoParams : 'New'}</p>
          </div>
          <TextForm label="Text" name="text" span="1" />
          <SelectTodoForm
            label="Complete"
            name="complete"
            span="1"
            newTodo={idTodoParams ? false : true}
          />
          <TextForm label="Author" name="author" span="1" />
          <Button className="save col-span-2" type="submit">
            Save
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default TodoQueryForm;
