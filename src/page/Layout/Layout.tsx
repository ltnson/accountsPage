import { useContext } from 'react';
import { AccountContext } from '../../store/AccountContext';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Layout = () => {
  const { showArr } = useContext(AccountContext);

  return (
    <div className="flex w-full">
      <Navbar />
      <Sidebar />
      <div
        className={`${
          showArr.sidebar && 'sm:w-[calc(100%-80px)] '
        } w-full h-screen pt-[60px] sm:pt-[84px] p-3 sm:p-5 bg-account-page flex transition-width duration-300 ease-in-out`}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
