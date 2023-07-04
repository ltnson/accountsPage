import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AccountContext } from '../../store/AccountContext';

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

const Sidebar = () => {
  const { showArr } = useContext(AccountContext);
  const { pathname } = useLocation();

  const sidebarArr: SidebarArr = [
    {
      logo: (className: string) => <DashbroadSVG className={className} />,
      name: 'Dashbroad',
    },
    {
      logo: (className: string) => <PJSVG className={className} />,
      name: 'Projects',
    },
    {
      logo: (className: string) => <StacksSVG className={className} />,
      name: 'Stacks',
    },
    {
      logo: (className: string) => <ReportSVG className={className} />,
      name: 'Report',
    },
    {
      logo: (className: string) => <UsersSVG className={className} />,
      name: 'Accounts',
    },
    {
      logo: (className: string) => <SettingSVG className={className} />,
      name: 'Role Management',
    },
  ];

  return (
    <div
      className={
        showArr.sidebar
          ? 'side-bar transition-width duration-300 ease-in-out'
          : 'w-0 -z-10 fixed sm:static transition-width duration-300 ease-in-out'
      }
    >
      <Typography className="sidebar-list" component="div">
        {sidebarArr.map((item) => (
          <NavLink to={item.name.toLowerCase()} key={item.name}>
            <Typography component="div" className="sideber-instance">
              {item.logo(
                pathname.includes(item.name.toLowerCase())
                  ? 'sidebar red'
                  : 'sidebar',
              )}
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
          </NavLink>
        ))}
      </Typography>
      <Notification />
    </div>
  );
};

export default Sidebar;
