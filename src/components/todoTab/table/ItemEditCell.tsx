import { Todo } from '../../../model/types';
import { useLocation, useNavigate } from 'react-router-dom';

import EyeSVG from '../../../assets/SVG/accountsSVG/EyeSVG';
import WriteSVG from '../../../assets/SVG/accountsSVG/WriteSVG';
import { useDispatch, useSelector } from 'react-redux';
import {
  showEditedAxiosSelector,
  showEditedQuerySelector,
} from '../../../store/selects';
import { todoQuerySlice } from '../../../store/slice/TodoQuerySlice';
import { todoAxiosSlice } from '../../../store/slice/TodoAxiosSlice';
import { todoQueryCartSlice } from '../../../store/slice/TodoQueryCartSlice';
import { useState } from 'react';
import ConfirmTodo from '../cart-form-edit/ConfirmTodo';

const ItemEditCell = ({ item }: { item: Todo }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const showEdited =
    pathname === '/todo-query' ? showEditedQuery : showEditedAxios;
  const { setEditFormQuery } = todoQuerySlice.actions;
  const { setEditFormAxios } = todoAxiosSlice.actions;
  const {
    setEditFormQueryCart,
    setIdTodoEditQueryCart,
    setShowEditedFormQueryCart,
    setDetailData,
    setShowDetail,
  } = todoQueryCartSlice.actions;
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleGoEditTodo = () => {
    if (pathname === '/todo-query') {
      dispatch(
        setEditFormQuery({
          text: item.text,
          complete: item.complete,
          author: item.author,
        }),
      );
      navigate(`edit/${item._id}`);
    }
    if (pathname === '/todo-axios') {
      dispatch(
        setEditFormAxios({
          text: item.text,
          complete: item.complete,
          author: item.author,
        }),
      );
      navigate(`edit/${item._id}`);
    }

    if (pathname === '/todo-query-cart') {
      dispatch(
        setEditFormQueryCart({
          text: item.text,
          complete: item.complete,
          author: item.author,
        }),
      );
      dispatch(setIdTodoEditQueryCart(item._id));
      return dispatch(setShowEditedFormQueryCart(true));
    }
    if (pathname.includes('/accounts/')) {
      navigate(`/accounts/edit/${item._id}`);
    }
    setShowConfirm(false);
  };

  const handleShowTodo = () => {
    dispatch(setDetailData(item));
    dispatch(setShowDetail(true));
  };

  const handleShowConfirm = (bool: boolean) => {
    setShowConfirm(bool);
  };

  return (
    <div className="flex gap-2">
      {showConfirm && (
        <ConfirmTodo
          handleAction={handleGoEditTodo}
          handleShowConfirm={handleShowConfirm}
          nameAction="Edit"
        />
      )}
      <a className="btn-show-cart" onClick={handleShowTodo}>
        <EyeSVG />
      </a>
      <a
        className="btn-show-cart "
        onClick={() => (showEdited ? setShowConfirm(true) : handleGoEditTodo())}
      >
        <WriteSVG />
      </a>
    </div>
  );
};

export default ItemEditCell;
