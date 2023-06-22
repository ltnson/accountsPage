import { useContext } from 'react';
import { AccountContext } from './store/AccountContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import AccountTab from './page/AccountTab';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import AccountAdd from './page/AccountAdd';

function App() {
  const { authLogin, showArr } = useContext(AccountContext);

  return (
    <div className="flex justify-center">
      {authLogin ? (
        <div className="flex w-full max-w-[1440px]">
          <Navbar />
          {showArr.sidebar && <Sidebar />}
          <div
            className={`${
              showArr.sidebar && 'sm:w-[calc(100%-80px)]'
            } w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 bg-account-page flex`}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/accounts" />} />
              <Route path="/accounts" element={<AccountTab />} />
              <Route path="/accounts/:pageNumber" element={<AccountTab />} />
              <Route path="/accounts/:search" element={<AccountTab />} />
              <Route path="/accounts/add" element={<AccountAdd />} />
              <Route
                path="/accounts/edit/:idAccount"
                element={<AccountAdd />}
              />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
