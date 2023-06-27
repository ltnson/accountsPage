import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AccountContext } from '../../store/AccountContext';

import { Button, Typography } from '@mui/material';
import DashbroadSVG from '../../assets/SVG/sidebarSVG/DashbroadSVG';
import PJSVG from '../../assets/SVG/sidebarSVG/PJSVG';
import StacksSVG from '../../assets/SVG/sidebarSVG/StacksSVG';
import ReportSVG from '../../assets/SVG/sidebarSVG/ReportSVG';
import UsersSVG from '../../assets/SVG/sidebarSVG/UsersSVG';
import SettingSVG from '../../assets/SVG/sidebarSVG/SettingSVG';
import NotificationSVG from '../../assets/SVG/sidebarSVG/NotificationSVG';
import LogoutSVG from '../../assets/SVG/sidebarSVG/LogoutSVG';

const Sidebar = () => {
  const [logoutCart, setLogoutCart] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setAuthLogin, userData, showArr } = useContext(AccountContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setAuthLogin(false);
  };

  return (
    <div
      className={
        showArr.sidebar
          ? 'side-bar transition-width duration-300 ease-in-out'
          : 'w-0 -z-10 fixed sm:static transition-width duration-300 ease-in-out'
      }
    >
      <div>
        <DashbroadSVG className="sidebar" />
        <PJSVG className="sidebar" />
        <StacksSVG className="sidebar" />
        <ReportSVG className="sidebar" />
        <UsersSVG
          className={`sidebar ${pathname.includes('/accounts') && 'red'}`}
          onClick={() => navigate('/accounts')}
        />
        <SettingSVG className="sidebar" />
      </div>
      <Typography component="div" className="footer-side">
        <NotificationSVG className="sidebar" />
        <div
          className="sm:p-2 hover:bg-red/F rounded-xl"
          onClick={() => setLogoutCart(!logoutCart)}
        >
          <img
            className="bg-t-light rounded-full w-9 h-9 "
            alt="it is me"
            src={userData?.image}
          />
        </div>
        {logoutCart && (
          <div className="logout-cart">
            <div>
              <p className="text-lg font-semibold pt-2">
                {userData?.firstName}
              </p>
              <p className="text-sm text-t-neutral">{userData?.email}</p>
            </div>
            <Button className="logout" onClick={handleLogout}>
              <LogoutSVG /> Log Out
            </Button>
          </div>
        )}
      </Typography>
    </div>
  );
};

export default Sidebar;
