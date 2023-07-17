import { NavLink } from 'react-router-dom';

import Notification from './notification/Notification';
import DashbroadSVG from '../../assets/SVG/sidebarSVG/DashbroadSVG';
import PJSVG from '../../assets/SVG/sidebarSVG/PJSVG';
import StacksSVG from '../../assets/SVG/sidebarSVG/StacksSVG';
import ReportSVG from '../../assets/SVG/sidebarSVG/ReportSVG';
import UsersSVG from '../../assets/SVG/sidebarSVG/UsersSVG';
import SettingSVG from '../../assets/SVG/sidebarSVG/SettingSVG';
import PolygonSVG from '../../assets/SVG/sidebarSVG/PolygonSVG';
import { SidebarArr } from '../../model/types';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { showSidebarSelector } from '../../store/selects';

const Sidebar = () => {
  const showSidebar = useSelector(showSidebarSelector);

  const sidebarArr: SidebarArr = [
    {
      logo: (className: string) => <DashbroadSVG className={className} />,
      path: 'dashbroad',
      name: 'Dashbroad',
    },
    {
      logo: (className: string) => <PJSVG className={className} />,
      path: 'todo-axios',
      name: 'TodoAxios',
    },
    {
      logo: (className: string) => <StacksSVG className={className} />,
      path: 'todo-query-cart',
      name: 'TodoQueryCart',
    },
    {
      logo: (className: string) => <ReportSVG className={className} />,
      path: 'todo-query',
      name: 'TodoQuery',
    },
    {
      logo: (className: string) => <UsersSVG className={className} />,
      path: 'accounts',
      name: 'Accounts',
    },
    {
      logo: (className: string) => <SettingSVG className={className} />,
      path: 'role-management',
      name: 'Role Management',
    },
  ];
  // change width if sidebar showing up
  return (
    <div
      className={
        showSidebar
          ? 'side-bar transition-width duration-300 ease-in-out'
          : 'w-0 -z-10 fixed sm:static transition-width duration-300 ease-in-out'
      }
    >
      <Typography className="sidebar-list" component="div">
        {sidebarArr.map((item) => (
          <NavLink to={item.path} key={item.name}>
            {({ isActive }) => (
              <Typography component="div" className="sideber-instance">
                {item.logo(isActive ? 'sidebar red' : 'sidebar')}
                <div className="absolute items-center top-3.5 left-11 sm:left-12">
                  <div className="w-[12px] h-[12px] flex items-center overflow-hidden">
                    <PolygonSVG />
                  </div>
                  <div className="px-2 sm:px-2.5 h-5 sm:h-[26px] bg-opacity/7 rounded-sm flex items-center">
                    <p className="text-white text-xs sm:text-sm font-semibold leading-none whitespace-nowrap">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Typography>
            )}
          </NavLink>
        ))}
      </Typography>
      <Notification />
    </div>
  );
};

export default Sidebar;
