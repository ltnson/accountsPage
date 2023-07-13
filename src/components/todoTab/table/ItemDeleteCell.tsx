import { Todo } from '../../../model/types';
import { CircularProgress, SvgIcon } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteTodo } from '../../../hooks/Todos';
import { toast } from 'react-hot-toast';
import { catchErr } from '../../../hooks/Accounts';
import axiosTodos from '../../../api/axiosTodos';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ItemDeleteCell = ({ item }: { item: Todo }) => {
  const { pathname } = useLocation();
  const [axiosLoading, setAxiosLoading] = useState<boolean>(false);
  const deleteMutation = deleteTodo();
  const deleteWithAxios = async () => {
    try {
      setAxiosLoading(true);
      toast.success(
        `${await axiosTodos.deleteTodo(item._id)}, Todo with ID: ${
          item._id
        } is deleted`,
      );
      setAxiosLoading(false);
    } catch (err) {
      setAxiosLoading(false);
      catchErr(err);
    }
  };

  const handleDeleteTodo = () => {
    const confirmed = window.confirm('You want to delete todo ???');
    if (confirmed) {
      if (pathname === '/todoaxios') {
        return deleteWithAxios();
      }
      deleteMutation.mutate(item._id, {
        onSuccess: (data) => {
          toast.success(`${data}, Todo with ID: ${item._id} is deleted`);
        },
        onError: (err) => {
          catchErr(err);
        },
      });
    }
  };

  return (
    <>
      {pathname === '/todoaxios' ? (
        <div className="flex justify-center items-center w-full h-full">
          {axiosLoading ? (
            <div className="h-7 w-7 sm:h-8 sm:w-8">
              <CircularProgress sx={{ color: '#ff8787' }} />
            </div>
          ) : (
            <a href="#" className="btn-delete-icon ">
              <SvgIcon
                component={DeleteOutlineIcon}
                className="delete-icon"
                onClick={handleDeleteTodo}
              />
            </a>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          {deleteMutation.isLoading ? (
            <div className="h-7 w-7 sm:h-8 sm:w-8">
              <CircularProgress sx={{ color: '#ff8787' }} />
            </div>
          ) : (
            <a href="#" className="btn-delete-icon ">
              <SvgIcon
                component={DeleteOutlineIcon}
                className="delete-icon"
                onClick={handleDeleteTodo}
              />
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default ItemDeleteCell;
