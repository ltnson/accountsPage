import { createContext, useState } from 'react';
import { ShowArr, MyContextData } from '../model/types';

export const AccountContext = createContext<MyContextData>({
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
  searchResult: 0,
  setSearchResult: () => {},
  searching: false,
  setSearching: () => {},
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
  const [searchResult, setSearchResult] = useState<number>(0);
  const [searching, setSearching] = useState<boolean>(false);

  const contextValue = {
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
    searchResult,
    setSearchResult,
    searching,
    setSearching,
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};
