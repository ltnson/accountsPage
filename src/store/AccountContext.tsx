import { createContext, useState } from "react";

interface MyContextData {
  authLogin: boolean;
  setAuthLogin: (value: boolean) => void;
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
  showDetail: boolean;
  setShowDetail: (value: boolean) => void;
  showUpload: boolean;
  setShowUpload: (value: boolean) => void;
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
}

export const AccountContext = createContext<MyContextData>({
  authLogin: false,
  setAuthLogin: () => {},
  showSidebar: false,
  setShowSidebar: () => {},
  showDetail: false,
  setShowDetail: () => {},
  showUpload: false,
  setShowUpload: () => {},
  showFilter: false,
  setShowFilter: () => {},
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authLogin, setAuthLogin] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const contextValue = {
    authLogin,
    setAuthLogin,
    showDetail,
    setShowSidebar,
    showSidebar,
    setShowDetail,
    showUpload,
    setShowUpload,
    showFilter,
    setShowFilter,
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};
