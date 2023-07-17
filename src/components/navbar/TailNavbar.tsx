import { useLocation, useNavigate } from 'react-router-dom';
import FieldSVG from '../../assets/SVG/navbarSVG/FieldSVG';
import PlushSVG from '../../assets/SVG/navbarSVG/PlusSVG';
import DownloadSVG from '../../assets/SVG/navbarSVG/DownloadSVG';
import UploadSVG from '../../assets/SVG/navbarSVG/UploadSVG';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSlice } from '../../store/slice/AccountSlice';
import {
  showEditedAxiosSelector,
  showEditedQuerySelector,
} from '../../store/selects';
import { todoQuerySlice } from '../../store/slice/TodoQuerySlice';
import { todoAxiosSlice } from '../../store/slice/TodoAxiosSlice';
import { todoQueryCartSlice } from '../../store/slice/TodoQueryCartSlice';
import { useState } from 'react';

const TailNavbar = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const showEdited =
    pathname === '/todo-query' ? showEditedQuery : showEditedAxios;
  const { setShowUpdate } = accountsSlice.actions;
  const { resetEditFormQuery } = todoQuerySlice.actions;
  const { setShowEditedFormQueryCart } = todoQueryCartSlice.actions;
  const { resetEditFormAxios } = todoAxiosSlice.actions;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleGoAdd = () => {
    if (pathname === '/todo-query') {
      dispatch(resetEditFormQuery());
      navigate('/todo-query/add');
    }
    if (pathname === '/todo-axios') {
      dispatch(resetEditFormAxios());
      navigate('/todo-axios/add');
    }
    if (pathname === '/todo-query-cart') {
      dispatch(setShowEditedFormQueryCart(true));
    }
    if (pathname.includes('/accounts')) {
      navigate('/accounts/add');
    }
    setShowConfirm(false);
  };
  return (
    <>
      {showConfirm && (
        <div className="bg-cart">
          <div className="w-96 bg-white p-8 rounded-xl">
            <p className="text-t-light">
              Your Edited Todo don"t save to Server, remove this and edit new
              Todo ??
            </p>
            <div className="flex justify-evenly gap-4 pt-4 pb-2  ">
              <Button
                className="filter-clear"
                onClick={() => setShowConfirm(false)}
              >
                Cancer
              </Button>
              <Button className="filter-show" onClick={handleGoAdd}>
                Add New
              </Button>
            </div>
          </div>
        </div>
      )}
      {!pathname.includes('add') && !pathname.includes('edit') && (
        <div className="flex gap-2.5 justify-self-end h-12 items-center">
          <FieldSVG
            className="navbar"
            onClick={() => dispatch(setShowUpdate())}
          />
          <UploadSVG
            className="navbar"
            onClick={() => dispatch(setShowUpdate())}
          />
          <DownloadSVG className="navbar" />
          <Button
            className=" btn-navbar"
            onClick={() => (showEdited ? setShowConfirm(true) : handleGoAdd())}
          >
            <PlushSVG /> New {title}
          </Button>
        </div>
      )}
    </>
  );
};

export default TailNavbar;
