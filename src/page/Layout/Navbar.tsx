import { Outlet, useLocation } from 'react-router-dom';
import SidebarButton from '../../assets/SVG/navbarSVG/SidebarButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  showDetailSelector,
  showSidebarSelector,
  showTodoDetailSelector,
  showUpdateSelector,
} from '../../store/selects';
import { accountsSlice } from '../../store/slice/AccountSlice';
import TailNavbar from '../../components/navbar/TailNavbar';
import AccountDetail from '../../components/account/account-carts/detail/AccountDetail';
import AccountUpdate from '../../components/account/account-carts/up-flie/AccountUpdate';
import TitleNavbar from '../../components/navbar/TitleNavbar';
import TodoDetail from '../../components/todoTab/cart-form-edit/TodoDetail';

const Navbar = ({ title }: { title: string }) => {
  const showSidebar = useSelector(showSidebarSelector);
  const showUpdate = useSelector(showUpdateSelector);
  const showDetail = useSelector(showDetailSelector);
  const showTodoDetail = useSelector(showTodoDetailSelector);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      {showTodoDetail && <TodoDetail />}
      {showUpdate && <AccountUpdate />}
      {showDetail && <AccountDetail />}
      <Outlet />
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
              onClick={() => dispatch(accountsSlice.actions.setShowSidebar())}
            />
            <TitleNavbar title={title} />
          </div>
        </div>
        {pathname === '/' || pathname.includes('/home') ? (
          <></>
        ) : (
          <TailNavbar title={title} />
        )}
      </div>
    </>
  );
};

export default Navbar;
