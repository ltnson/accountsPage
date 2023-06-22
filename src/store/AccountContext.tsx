import { createContext, useEffect, useState } from 'react';
import { User, ShowArr, MyContextData } from '../model/types';

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
  opMember: '',
  setOpMember: () => {},
  filter: '',
  setFilter: () => {},
  searchResult: 0,
  setSearchResult: () => {},
  pathName: '',
  setPathName: () => {},
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authLogin, setAuthLogin] = useState<boolean>(true);
  const [userData, setUserData] = useState<User | null>(null);

  const [showArr, setShowArr] = useState<ShowArr>({
    sidebar: false,
    detail: false,
    filter: false,
    update: false,
  });
  const [limitTab, setLimitTab] = useState<number>(10);
  const [skipTab, setSkipTab] = useState<number>(0);
  const [totalTab, setTotalTab] = useState<number>(100);
  const [idDetail, setIdDetail] = useState<number>(0);
  const [opMember, setOpMember] = useState<string>('all');
  const [filter, setFilter] = useState<string>('');
  const [pathName, setPathName] = useState<string>(
    `?limit=${limitTab}` + '&' + `skip=${skipTab}`,
  );
  const [searchResult, setSearchResult] = useState<number>(0);

  useEffect(() => {
    const userLocalString = localStorage.getItem('user');
    const userLocal: User | null = userLocalString
      ? JSON.parse(userLocalString)
      : null;
    if (!userLocal) {
      setAuthLogin(false);
    }
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
    opMember,
    setOpMember,
    searchResult,
    setSearchResult,
    filter,
    setFilter,
    pathName,
    setPathName,
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};
