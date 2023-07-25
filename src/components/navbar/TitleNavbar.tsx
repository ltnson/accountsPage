import { useLocation, useNavigate } from 'react-router-dom';
import LeftSVG from '../../assets/SVG/navbarSVG/LeftSVG';

const TitleNavbar = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let content: JSX.Element = (
    <p className="px-2 text-2xl font-bold hidden sm:block">{title}</p>
  );
  if (pathname.includes('add')) {
    content = (
      <p className="text-add-light text-sm sm:text-xl flex items-center gap-2">
        <LeftSVG onClick={() => navigate(-1)} />
        {`${title} / Create New ${title}`}
      </p>
    );
  }
  if (pathname.includes('edit')) {
    content = (
      <p className="text-add-light text-sm sm:text-xl flex items-center gap-2">
        <LeftSVG onClick={() => navigate(-1)} />
        {`${title} / Edit ${title}`}
      </p>
    );
  }

  return <>{content}</>;
};

export default TitleNavbar;
