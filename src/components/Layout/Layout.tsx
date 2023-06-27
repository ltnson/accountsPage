import React, { useContext } from 'react';
import { AccountContext } from '../../store/AccountContext';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

type Props = React.PropsWithChildren<{}>;

const Layout = (props: Props) => {
  const { authLogin, showArr } = useContext(AccountContext);

  return (
    <div className="flex justify-center">
      {authLogin ? (
        <div className="flex w-full max-w-[1440px]">
          <Navbar />
          <Sidebar />
          <div
            className={`${
              showArr.sidebar && 'sm:w-[calc(100%-80px)] '
            } w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 bg-account-page flex transition-width duration-300 ease-in-out`}
          >
            {props.children}
          </div>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </div>
  );
};
export default Layout;
