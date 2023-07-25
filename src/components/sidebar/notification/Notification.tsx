import { useState } from 'react';
import NotificationSVG from '../../../assets/SVG/sidebarSVG/NotificationSVG';
import LogoutSVG from '../../../assets/SVG/sidebarSVG/LogoutSVG';
import { Button, Typography } from '@mui/material';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { User } from '../../../model/types';

const Notification = () => {
  const [logoutCart, setLogoutCart] = useState<boolean>(false);
  const navigate = useNavigate();
  const userData = useLoaderData() as User;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Typography component="div" className="footer-side">
      <NotificationSVG className="sidebar" />
      <div
        className="sm:p-2 hover:bg-red/F rounded-xl"
        onClick={() => setLogoutCart(!logoutCart)}
      >
        <img
          className="bg-add-light rounded-full w-9 h-9 "
          alt="it is me"
          src={userData?.image}
        />
      </div>
      {logoutCart && (
        <div className="logout-cart">
          <div>
            <p className="text-lg font-semibold pt-2">{userData?.firstName}</p>
            <p className="text-sm text-add-neutral">{userData?.email}</p>
          </div>
          <Button className="logout" onClick={handleLogout}>
            <LogoutSVG /> Log Out
          </Button>
        </div>
      )}
    </Typography>
  );
};

export default Notification;
