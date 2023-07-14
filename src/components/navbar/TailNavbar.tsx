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

const TailNavbar = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showEditedQuery = useSelector(showEditedQuerySelector);
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const { setShowUpdate } = accountsSlice.actions;
  const { resetEditFormQuery } = todoQuerySlice.actions;
  const { setShowEditedFormQueryCart } = todoQueryCartSlice.actions;
  const { resetEditFormAxios } = todoAxiosSlice.actions;

  const handleGoAdd = () => {
    if (pathname === '/todoquery') {
      if (showEditedQuery) {
        const confirmed = window.confirm(
          'Your Edited Todo don"t save to Server ,remove this, and edit new Todo ??',
        );
        if (!confirmed) {
          return;
        }
      }
      dispatch(resetEditFormQuery());
    }
    if (pathname === '/todoaxios') {
      if (showEditedAxios) {
        const confirmed = window.confirm(
          'Your Edited Todo don"t save to Server ,remove this, and edit new Todo ??',
        );
        if (!confirmed) {
          return;
        }
      }
      dispatch(resetEditFormAxios());
    }
    if (pathname === '/todoquerycart') {
      return dispatch(setShowEditedFormQueryCart(true));
    }
    navigate('add');
  };
  return (
    <>
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
          <Button className=" btn-navbar" onClick={handleGoAdd}>
            <PlushSVG /> New {title}
          </Button>
        </div>
      )}
    </>
  );
};

export default TailNavbar;
