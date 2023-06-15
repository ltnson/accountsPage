import SidebarButton from "../../assets/SVG/navbarSVG/SidebarButton";
import FieldSVG from "../../assets/SVG/navbarSVG/FieldSVG";
import PlushSVG from "../../assets/SVG/navbarSVG/PlusSVG";
import DownloadSVG from "../../assets/SVG/navbarSVG/DownloadSVG";
import UploadSVG from "../../assets/SVG/navbarSVG/UploadSVG";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LeftSVG from "../../assets/SVG/navbarSVG/LeftSVG";
import { useContext } from "react";
import { AccountContext } from "../../store/AccountContext";

const Navbar = () => {
  const { showSidebar, setShowSidebar, setShowUpload } =
    useContext(AccountContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let title: JSX.Element = (
    <p className="px-2 text-2xl font-bold hidden sm:block">ACCOUNT</p>
  );
  if (pathname === "/accounts/add") {
    title = (
      <p className="text-t-light text-sm md:text-xl">
        <LeftSVG onClick={() => navigate("..")} /> Accounts / Create New Account
      </p>
    );
  }
  if (pathname.includes("/accounts/edit")) {
    title = (
      <p className="text-t-light text-sm md:text-xl">
        <LeftSVG onClick={() => navigate("..")} /> Accounts / Edit Account
      </p>
    );
  }
  return (
    <div className="max-w-[1440px] w-full flex h-12 sm:h-16 px-2 sm:px-3 fixed bg-white z-20 items-center">
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className=" px-2 flex items-center w-full"
      >
        <SidebarButton className="sidebar-toggle" />
        {title}
      </div>
      {pathname === "/accounts" && (
        <div className="flex gap-2.5 justify-self-end h-12 items-center">
          <FieldSVG className="navbar" />
          <UploadSVG className="navbar" onClick={() => setShowUpload(true)} />
          <DownloadSVG className="navbar" />
          <Button className="navbar" onClick={() => navigate("/accounts/add")}>
            <PlushSVG /> New Account
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
