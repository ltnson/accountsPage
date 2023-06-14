import SidebarButton from "../../assets/SVG/navbarSVG/SidebarButton";
import FieldSVG from "../../assets/SVG/navbarSVG/FieldSVG";
import PlushSVG from "../../assets/SVG/navbarSVG/PlusSVG";
import DownloadSVG from "../../assets/SVG/navbarSVG/DownloadSVG";
import UploadSVG from "../../assets/SVG/navbarSVG/UploadSVG";
import { Button } from "@mui/material";

const Navbar = ({ onSidebar }: { onSidebar: any }) => {
  return (
    <div className="max-w-[1440px] w-full grid grid-cols-2 h-12 sm:h-16 px-2 sm:px-3 fixed bg-white z-20 content-center">
      <div
        onClick={() => onSidebar()}
        className="w-16 sm:w-20 px-2 flex items-center"
      >
        <SidebarButton className="sidebar-toggle" />
        <p className="px-2 text-2xl font-bold hidden sm:block">ACCOUNT</p>
      </div>
      <div className="flex gap-2.5 justify-self-end h-12 items-center">
        <FieldSVG className="navbar" />
        <UploadSVG className="navbar" />
        <DownloadSVG className="navbar" />
        <Button className="navbar">
          <PlushSVG /> New Account
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
