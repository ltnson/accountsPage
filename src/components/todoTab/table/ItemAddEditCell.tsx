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

const ItemAddEditCell = ({ item }: { item: Todo }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const { setEditFormQuery } = todoQuerySlice.actions;
  const { setEditFormAxios } = todoAxiosSlice.actions;
  const {
    setEditFormQueryCart,
    setIdTodoEditQueryCart,
    setShowEditedFormQueryCart,
    setDetailData,
    setShowDetail,
  } = todoQueryCartSlice.actions;

  const handleGoEditTodo = () => {
    if (pathname === '/todoquery') {
      if (showEditedQuery) {
        const confirmed = window.confirm(
          'Your Edited Todo don"t save to Server ,remove this, and edit new Todo ??',
        );
        if (confirmed) {
          dispatch(
            setEditFormQuery({
              text: item.text,
              complete: item.complete,
              author: item.author,
            }),
          );
          return navigate(`edit/${item._id}`);
        } else {
          return;
        }
      }
      dispatch(
        setEditFormQuery({
          text: item.text,
          complete: item.complete,
          author: item.author,
        }),
      );
    }
    if (pathname === '/todoaxios') {
      if (showEditedAxios) {
        const confirmed = window.confirm(
          'Your Edited Todo don"t save to Server ,remove this, and edit new Todo ??',
        );
        if (confirmed) {
          dispatch(
            setEditFormAxios({
              text: item.text,
              complete: item.complete,
              author: item.author,
            }),
          );
          return navigate(`edit/${item._id}`);
        } else {
          return;
        }
      }
      dispatch(
        setEditFormAxios({
          text: item.text,
          complete: item.complete,
          author: item.author,
        }),
      );
    }
    if (pathname === '/todoquerycart') {
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
    navigate(`edit/${item._id}`);
  };

  const handleShowTodo = () => {
    dispatch(setDetailData(item));
    dispatch(setShowDetail(true));
  };

  return (
    <div className="flex gap-2">
      <a href="#" className="btn-show-cart" onClick={handleShowTodo}>
        <EyeSVG />
      </a>
      <a href="#" className="btn-show-cart " onClick={handleGoEditTodo}>
        <WriteSVG />
      </a>
    </div>
  );
};

export default ItemAddEditCell;
