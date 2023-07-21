import { Todo } from '../../../model/types';
import { CircularProgress, SvgIcon } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteTodo, reloadTodoKey } from '../../../hooks/Todos';
import { toast } from 'react-hot-toast';
import { catchErr } from '../../../hooks/Accounts';
import axiosTodos from '../../../api/axiosTodos';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { todoAxiosSlice } from '../../../store/slice/TodoAxiosSlice';
import ConfirmTodo from '../cart-form-edit/ConfirmTodo';

const ItemDeleteCell = ({ item }: { item: Todo }) => {
  const { pathname } = useLocation();
  const [axiosLoading, setAxiosLoading] = useState<boolean>(false);
  const deleteMutation = deleteTodo();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const deleteWithAxios = async () => {
    try {
      setAxiosLoading(true);
      toast.success(
        `${await axiosTodos.deleteTodo(item._id)}, Todo with ID: ${
          item._id
        } is deleted`,
      );
      dispatch(todoAxiosSlice.actions.setReloadTodo(true));
      setAxiosLoading(false);
    } catch (err) {
      setAxiosLoading(false);
      catchErr(err);
    }
  };

  const handleDeleteTodo = () => {
    if (pathname === '/todo-axios') {
      return deleteWithAxios();
    }
    deleteMutation.mutate(item._id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: reloadTodoKey });
      },
    });
    setShowConfirm(false);
  };

  const handleShowConfirm = (bool: boolean) => {
    setShowConfirm(bool);
  };

  return (
    <>
      {showConfirm && (
        <ConfirmTodo
          handleAction={handleDeleteTodo}
          handleShowConfirm={handleShowConfirm}
          nameAction="Delete"
        />
      )}
      <div className="flex justify-center items-center w-full h-full">
        {deleteMutation.isLoading || axiosLoading ? (
          <div className="h-7 w-7 sm:h-8 sm:w-8">
            <CircularProgress sx={{ color: '#ff8787' }} />
          </div>
        ) : (
          <a className="btn-delete-icon ">
            <SvgIcon
              component={DeleteOutlineIcon}
              className="delete-icon"
              onClick={() => setShowConfirm(true)}
            />
          </a>
        )}
      </div>
    </>
  );
};

export default ItemDeleteCell;
