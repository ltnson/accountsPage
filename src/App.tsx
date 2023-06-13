import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./page/LoginPage";
import AccountTab from "./page/AccountTab";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex justify-center">
      {/* <LoginPage /> */}
      <div className="max-w-[1440px] w-full h-screen">
        <Navbar onSidebar={handleShowSidebar} />
        <div className="flex">
          {showSidebar && <Sidebar />}
          <Routes>
            {<Route path="/" element={<Navigate to="/accounts" />} />}
            {<Route path="/accounts" element={<AccountTab />} />}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
