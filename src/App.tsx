import { useContext } from "react";
import { AccountContext } from "./store/AccountContext";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./page/LoginPage";
import AccountTab from "./page/AccountTab";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import AccountAdd from "./page/AccountAdd";

function App() {
  const { showSidebar } = useContext(AccountContext);
  const { authLogin } = useContext(AccountContext);

  return (
    <div className="flex justify-center">
      {authLogin ? (
        <>
          <Navbar />
          <div className="flex w-full max-w-[1440px] bg-account-page">
            {showSidebar && <Sidebar />}
            <Routes>
              <Route path="/" element={<Navigate to="/accounts" />} />
              <Route path="/accounts" element={<AccountTab />} />
              <Route path="/accounts/add" element={<AccountAdd />} />
            </Routes>
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
