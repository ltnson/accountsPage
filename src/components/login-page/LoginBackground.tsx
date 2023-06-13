import frame from "../../assets/SVG/loginSVG/Frame.svg";

const LoginBackground = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-2 pl-8 bg-login-page w-full">
        <div className="flex gap-x-5 h-full">
          <div className="w-4/12 bg-cyan"></div>
          <div className="w-2/12 bg-cyan"></div>
          <div className="w-1/12 bg-cyan"></div>
        </div>
        <div className="flex items-center">
          <div className="bg-login flex items-center h-5/6 pt-12">
            <img src={frame} />
          </div>
        </div>
      </div>
      <div className="text-cyan-paraph fixed bottom-4 flex justify-center w-full">
        <p>Version 1.1.24</p>
      </div>
    </>
  );
};

export default LoginBackground;
