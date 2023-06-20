import BgLoginSVG from '../../assets/SVG/loginSVG/BgLoginSVG';
import BgLoginFrame from '../../assets/SVG/loginSVG/BgLoginFrame';

const LoginBackground = () => {
  return (
    <div className="h-screen grid grid-cols-8 pl-8  w-full relative">
      <div className="flex gap-x-5 h-full col-span-3 w-full">
        <div className="w-4/12 bg-cyan"></div>
        <div className="w-2/12 bg-cyan"></div>
        <div className="w-1/12 bg-cyan"></div>
      </div>
      <div className="flex items-center col-span-5 w-full">
        <div className="z-10 top-0 right-0 py-12 h-screen w-full relative">
          <BgLoginSVG />
          <div className="bg-login z-20 fixed flex items-center h-full w-auto  justify-end w-5/8 absolute top-0 right-0">
            <div className="z-20 h-2/3">
              <BgLoginFrame />
            </div>
          </div>
        </div>
      </div>
      <div className="text-cyan-paraph absolute bottom-4 flex justify-center w-full">
        <p>Version 1.1.24</p>
      </div>
    </div>
  );
};

export default LoginBackground;
