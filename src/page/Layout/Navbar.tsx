import { useLocation, useNavigate } from 'react-router-dom';
import SidebarButton from '../../assets/SVG/navbarSVG/SidebarButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  showSidebarSelector,
  showTodoDetailSelector,
  showUpdateSelector,
} from '../../store/selects';
import { accountsSlice } from '../../store/slice/AccountSlice';
import TailNavbar from '../../components/navbar/TailNavbar';
import AccountUpdate from '../../components/account/account-carts/up-flie/AccountUpdate';
import TitleNavbar from '../../components/navbar/TitleNavbar';
import TodoDetail from '../../components/todoTab/cart-form-edit/TodoDetail';
import {
  showEditedAxiosSelector,
  showEditedQuerySelector,
} from '../../store/selects';
import ConfirmTodo from '../../components/todoTab/cart-form-edit/ConfirmTodo';
import { useState } from 'react';
import { todoQuerySlice } from '../../store/slice/TodoQuerySlice';
import { todoQueryCartSlice } from '../../store/slice/TodoQueryCartSlice';
import { todoAxiosSlice } from '../../store/slice/TodoAxiosSlice';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHomePage = pathname === '/' || pathname.includes('/home');
  const isAddEditPage = !pathname.includes('add') && !pathname.includes('edit');

  const showSidebar = useSelector(showSidebarSelector);
  const showUpdate = useSelector(showUpdateSelector);
  const showTodoDetail = useSelector(showTodoDetailSelector);
  const handleShowUpdateCart = () => {
    dispatch(setShowUpdate());
  };
  const { setShowSidebar } = accountsSlice.actions;

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const handleShowConfirm = (bool: boolean) => {
    setShowConfirm(bool);
  };

  const showEditedQuery = useSelector(showEditedQuerySelector);
  const showEditedAxios = useSelector(showEditedAxiosSelector);
  const showEdited =
    pathname === '/todo-query' ? showEditedQuery : showEditedAxios;

  const { setShowUpdate } = accountsSlice.actions;
  const { resetEditFormQuery } = todoQuerySlice.actions;
  const { setShowEditedFormQueryCart } = todoQueryCartSlice.actions;
  const { resetEditFormAxios } = todoAxiosSlice.actions;

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

  let title = 'home';
  if (pathname === '/todo-query') {
    title = 'Todo Query';
  }
  if (pathname === '/todo-axios') {
    title = 'Todo Axios';
  }
  if (pathname === '/todo-query-cart') {
    title = 'Todo Query Cart';
  }
  if (
    pathname === '/accounts/tab' ||
    pathname === '/accounts/male' ||
    pathname === '/accounts/female' ||
    pathname === '/accounts/filter'
  ) {
    title = 'Accounts';
  }

  return (
    <>
      {showTodoDetail && <TodoDetail />}
      {showUpdate && <AccountUpdate />}
      {showConfirm && (
        <ConfirmTodo
          handleAction={handleGoAdd}
          handleShowConfirm={handleShowConfirm}
          nameAction="Add New"
        />
      )}
      <div className="w-full flex h-12 sm:h-16 pr-2 sm:pr-3 lg:pr-5  bg-white z-20 items-center fixed top-0 left-0">
        <div className=" pr-2 flex items-center w-full ">
          <div
            className={`h-16 sm:h-20 p-2 sm:py-4 flex items-center ${
              showSidebar && 'gap-2 sm:gap-3 sm:p-4'
            }`}
          >
            <SidebarButton
              className={
                showSidebar ? 'sidebar-toggle-active' : 'sidebar-toggle'
              }
              onClick={() => dispatch(setShowSidebar())}
            />
            <TitleNavbar title={title} />
          </div>
        </div>
        {!isHomePage && isAddEditPage && (
          <TailNavbar
            title={title}
            handleGoAdd={
              showEdited ? () => handleShowConfirm(true) : handleGoAdd
            }
            handleShowUpdateCart={handleShowUpdateCart}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
