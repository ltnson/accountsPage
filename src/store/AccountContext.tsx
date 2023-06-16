import { createContext, useEffect, useState } from "react";
import { User, ShowArr } from "../model/types";

interface MyContextData {
  authLogin: boolean;
  setAuthLogin: (value: boolean) => void;
  showArr: ShowArr;
  setShowArr: (value: ShowArr) => void;
  limitTab: number;
  setLimitTab: (value: number) => void;
  skipTab: number;
  setSkipTab: (value: number) => void;
  totalTab: number;
  setTotalTab: (value: number) => void;
  idDetail: number;
  setIdDetail: (value: number) => void;
  userData: User | null;
  setUserData: (data: User) => void;
}

export const AccountContext = createContext<MyContextData>({
  authLogin: false,
  setAuthLogin: () => {},
  showArr: {
    sidebar: false,
    detail: false,
    filter: false,
    update: false,
  },
  setShowArr: () => {},
  totalTab: 10,
  setTotalTab: () => {},
  limitTab: 1,
  setLimitTab: () => {},
  skipTab: 1,
  setSkipTab: () => {},
  idDetail: 0,
  setIdDetail: () => {},
  userData: null,
  setUserData: () => {},
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authLogin, setAuthLogin] = useState<boolean>(false);
  const [showArr, setShowArr] = useState<ShowArr>({
    sidebar: false,
    detail: false,
    filter: false,
    update: false,
  });

  const [userData, setUserData] = useState<User | null>(null);
  const [limitTab, setLimitTab] = useState<number>(10);
  const [totalTab, setTotalTab] = useState<number>(10);
  const [skipTab, setSkipTab] = useState<number>(0);
  const [idDetail, setIdDetail] = useState<number>(0);

  useEffect(() => {
    const userLocalString = localStorage.getItem("user");
    const userLocal: User | null = userLocalString
      ? JSON.parse(userLocalString)
      : null;
    if (userLocal) {
      setUserData(userLocal);
      setAuthLogin(true);
    }
  }, []);

  const contextValue = {
    authLogin,
    setAuthLogin,
    showArr,
    setShowArr,
    limitTab,
    setLimitTab,
    skipTab,
    setSkipTab,
    totalTab,
    setTotalTab,
    idDetail,
    setIdDetail,
    userData,
    setUserData,
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};
