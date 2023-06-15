import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashbroadSVG from "../../assets/SVG/sidebarSVG/DashbroadSVG";
import PJSVG from "../../assets/SVG/sidebarSVG/PJSVG";
import StacksSVG from "../../assets/SVG/sidebarSVG/StacksSVG";
import ReportSVG from "../../assets/SVG/sidebarSVG/ReportSVG";
import UsersSVG from "../../assets/SVG/sidebarSVG/UsersSVG";
import SettingSVG from "../../assets/SVG/sidebarSVG/SettingSVG";
import NotificationSVG from "../../assets/SVG/sidebarSVG/NotificationSVG";
import LogoutSVG from "../../assets/SVG/sidebarSVG/LogoutSVG";
import { Button } from "@mui/material";

const Sidebar = () => {
  const [logoutCart, setLogoutCart] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-16 sm:w-20 px-3 pb-4 h-screen pt-16 flex flex-col justify-between fixed md:static bg-white z-10">
      <div>
        <DashbroadSVG className="sidebar" />
        <PJSVG className="sidebar" />
        <StacksSVG className="sidebar" />
        <ReportSVG className="sidebar" />
        <UsersSVG
          className={`sidebar ${pathname.includes("/accounts") && "red"}`}
          onClick={() => navigate("/accounts")}
        />
        <SettingSVG className="sidebar" />
      </div>
      <div className="relative flex flex-col items-center gap-12">
        <NotificationSVG className="sidebar" />
        <div
          className="p-2 hover:bg-red/F rounded-xl"
          onClick={() => setLogoutCart(!logoutCart)}
        >
          <img
            className="bg-t-light rounded-full w-9 h-9"
            alt="it is me"
            src="https://robohash.org/autquiaut.png?size=50x50&set=set1"
          />
        </div>
        {logoutCart && (
          <div className="w-56 sm:w-64 sm:h-36 p-4 absolute z-10 bottom-2 left-12 rounded-xl shadow-xl flex flex-col justify-between bg-white">
            <div>
              <p className="text-lg font-semibold pt-2">Username</p>
              <p className="text-sm text-t-neutral">example@gmail</p>
            </div>
            <Button className="logout">
              <LogoutSVG /> Log Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
