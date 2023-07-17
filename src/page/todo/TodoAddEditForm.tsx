import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditTodo } from '../../model/types';
import { schemaTodo } from '../../util/yupSchema';
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
import TextTodoForm from '../../components/forms/TextTodoForm';

const TodoQueryForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idTodoParams } = useParams();
  const editQueryData = useSelector(todoQueryEditDataSelector);
  const editAxiosData = useSelector(todoAxiosEditDataSelector);
  const { setEditFormQuery, setIdTodoEditQuery, setShowEditedFormQuery } =
    todoQuerySlice.actions;
  const { setEditFormAxios, setIdTodoEditAxios, setShowEditedFormAxios } =
    todoAxiosSlice.actions;

  const formTodo = useForm<EditTodo>({
    resolver: yupResolver(schemaTodo),
    defaultValues: pathname.includes('/todo-query')
      ? editQueryData
      : editAxiosData,
  });

  const { handleSubmit, control } = formTodo;
  const onSubmit = (data: EditTodo) => {
    if (pathname.includes('/todo-query')) {
      if (idTodoParams) {
        dispatch(setIdTodoEditQuery(idTodoParams));
      }
      dispatch(setEditFormQuery(data));
      dispatch(setShowEditedFormQuery(true));
      return navigate('/todo-query');
    }
    if (idTodoParams) {
      dispatch(setIdTodoEditAxios(idTodoParams));
    }
    dispatch(setEditFormAxios(data));
    dispatch(setShowEditedFormAxios(true));
    navigate('/todo-axios');
  };

  return (
    <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-6"
      >
        <div>
          <LabelForm label="ID Todo" />
          <p className="font-bold">{idTodoParams ? idTodoParams : 'New'}</p>
        </div>
        <TextTodoForm label="Text" name="text" control={control} />
        <SelectTodoForm
          label="Complete"
          name="complete"
          control={control}
          newTodo={idTodoParams ? false : true}
        />
        <TextTodoForm label="Author" name="author" control={control} />
        <Button className="save col-span-2" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default TodoQueryForm;
