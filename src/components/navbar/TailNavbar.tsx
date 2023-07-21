import FieldSVG from '../../assets/SVG/navbarSVG/FieldSVG';
import PlushSVG from '../../assets/SVG/navbarSVG/PlusSVG';
import DownloadSVG from '../../assets/SVG/navbarSVG/DownloadSVG';
import UploadSVG from '../../assets/SVG/navbarSVG/UploadSVG';
import { Button } from '@mui/material';

const TailNavbar = ({
  title,
  handleGoAdd,
  handleShowUpdateCart,
}: {
  title: string;
  handleGoAdd: () => void;
  handleShowUpdateCart: () => void;
}) => {
  return (
    <div className="flex gap-2.5 justify-self-end h-12 items-center">
      <FieldSVG className="navbar" onClick={handleShowUpdateCart} />
      <UploadSVG className="navbar" onClick={handleShowUpdateCart} />
      <DownloadSVG className="navbar" />
      <Button className=" btn-navbar" onClick={handleGoAdd}>
        <PlushSVG /> New {title}
      </Button>
    </div>
  );
};

export default TailNavbar;
