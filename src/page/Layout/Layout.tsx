import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { showSidebarSelector } from '../../store/selects';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

const Layout = () => {
  const showSidebar = useSelector(showSidebarSelector);

  return (
    <div className="flex w-full">
      <Navbar />
      <Sidebar />
      {/* change width if sidebar showing up */}
      <div
        className={`${
          showSidebar && 'sm:w-[calc(100%-80px)] '
        } w-full h-screen pt-[60px] sm:pt-[84px] p-3 sm:p-5 bg-account-page flex transition-width duration-300 ease-in-out`}
      >
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
