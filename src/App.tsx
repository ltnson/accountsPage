import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./page/LoginPage";
import AccountTab from "./page/AccountTab";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import AccountDetail from "./components/account/account-detail/AccountDetail";
import AccountUpdate from "./components/account/account-up-flie/AccountUpdate";
import AccountAdd from "./page/AccountAdd";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex justify-center">
      {/* <LoginPage /> */}
      <>
        <Navbar onSidebar={handleShowSidebar} />
        {/* <AccountDetail /> */}
        {/* <AccountUpdate /> */}
        <div className="flex w-full h-screen max-w-[1440px] bg-account-page">
          {showSidebar && <Sidebar />}
          <Routes>
            <Route path="/" element={<Navigate to="/accounts" />} />
            <Route path="/accounts" element={<AccountTab />} />
            <Route path="/accounts/add" element={<AccountAdd />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
