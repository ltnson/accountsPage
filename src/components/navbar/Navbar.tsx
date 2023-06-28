import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AccountContext } from '../../store/AccountContext';

import { Button } from '@mui/material';
import SidebarButton from '../../assets/SVG/navbarSVG/SidebarButton';
import FieldSVG from '../../assets/SVG/navbarSVG/FieldSVG';
import PlushSVG from '../../assets/SVG/navbarSVG/PlusSVG';
import DownloadSVG from '../../assets/SVG/navbarSVG/DownloadSVG';
import UploadSVG from '../../assets/SVG/navbarSVG/UploadSVG';
import LeftSVG from '../../assets/SVG/navbarSVG/LeftSVG';

const Navbar = () => {
  const { showArr, setShowArr } = useContext(AccountContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let title: JSX.Element = (
    <p className="px-2 text-2xl font-bold hidden sm:block">ACCOUNT</p>
  );
  if (pathname === '/accounts/add') {
    title = (
      <p className="text-t-light text-sm sm:text-xl">
        <LeftSVG onClick={() => navigate('..')} /> Accounts / Create New Account
      </p>
    );
  }
  if (pathname.includes('/accounts/edit')) {
    title = (
      <p className="text-t-light text-sm sm:text-xl">
        <LeftSVG onClick={() => navigate('..')} /> Accounts / Edit Account
      </p>
    );
  }
  return (
    <div className=" w-full flex h-12 sm:h-16 pr-2 sm:pr-3  bg-white z-20 items-center fixed top-0 left-0 z-20">
      <div className=" pr-2 flex items-center w-full ">
        <div className="h-16 sm:h-20 p-2 sm:p-3 ">
          <SidebarButton
            className="sidebar-toggle"
            onClick={() =>
              setShowArr({ ...showArr, sidebar: !showArr.sidebar })
            }
          />
        </div>
        {title}
      </div>
      {!pathname.includes('/accounts/add') &&
        !pathname.includes('/accounts/edit') && (
          <div className="flex gap-2.5 justify-self-end h-12 items-center">
            <FieldSVG
              className="navbar"
              onClick={() => setShowArr({ ...showArr, update: true })}
            />
            <UploadSVG
              className="navbar"
              onClick={() => setShowArr({ ...showArr, update: true })}
            />
            <DownloadSVG className="navbar" />
            <Button
              className="navbar"
              onClick={() => navigate('/accounts/add')}
            >
              <PlushSVG /> New Account
            </Button>
          </div>
        )}
    </div>
  );
};

export default Navbar;
