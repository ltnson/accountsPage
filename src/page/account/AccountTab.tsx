import {
  LoaderFunction,
  redirect,
  useLoaderData,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import AccountTabHeader from '../../components/account/account-tab/AccountTabHeader';
import AccountTabFooter from '../../components/account/account-tab/AccountTabFooter';
import AccountDetail from '../../components/account/account-carts/detail/AccountDetail';
import AccountTabTable from '../../components/account/account-tab/AccountTabTable';

import { useSelector } from 'react-redux';
import { showDetailSelector } from '../../store/selects';
import { getAccountDetail, getAccountsLimit } from '../../hooks/Accounts';
import { idDetailSelector } from '../../store/selects';
import { useState, useEffect } from 'react';

const AccountTab = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const limitStr = searchParams.get('limit');
  const pageStr = searchParams.get('page');
  const url = useLoaderData() as string;
  const [tailAPI, setTailAPI] = useState<string>(url);

  const [limitTab, setLimitTab] = useState<number>(10);
  const [skipTab, setSkipTab] = useState<number>(0);
  const [totalTab, setTotalTab] = useState<number>(100);
  const [searchResult, setSearchResult] = useState<number>(0);
  const [searching, setSearching] = useState<boolean>(false);

  const showDetail = useSelector(showDetailSelector);
  const idDetail = useSelector(idDetailSelector);

  const isShowPagination = !searching && pathname.includes('/accounts/tab');

  useEffect(() => {
    setTailAPI(url);
  }, [url]);

  //lay du lieu cho table
  const accountsListTable = getAccountsLimit(tailAPI);

  //neu data thay doi ,set lai total va resultTotal
  useEffect(() => {
    if (accountsListTable.data) {
      setTotalTab(accountsListTable.data.total);
      setSearchResult(accountsListTable.data.limit);
    }
  }, [accountsListTable.data]);

  //bat su kien input va lay data
  const handleToSearch = (e: string) => {
    if (e === '') {
      setSearching(false);
      return setTailAPI(url);
    }
    setTimeout(() => {
      setSearching(true);
      setTailAPI(`/search?q=${e}`);
    }, 1000);
  };

  //goi lai data khi url browser thay doi
  useEffect(() => {
    const limit = limitStr && parseInt(limitStr);
    const page = pageStr && parseInt(pageStr);
    if (limit && page) {
      setLimitTab(limit);
      setSkipTab(Math.ceil((page - 1) * limit));
    }
  }, [limitStr, pageStr]);

  // thay doi client url neu nguoi dung chuyen trang table
  useEffect(() => {
    if (pathname.includes('/accounts/tab'))
      navigate(
        `/accounts/tab?limit=${limitTab}&page=${Math.ceil(
          skipTab / limitTab + 1,
        )}`,
      );
  }, [limitTab, skipTab]);

  //chon page all, male, female
  const handlePageHeader = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pathName: string,
  ) => {
    if (pathName.includes(pathname)) {
      e.preventDefault();
    } else {
      navigate(pathName);
    }
  };

  //using pagination of MUI for set limit and skip
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSkipTab(value * limitTab - limitTab);
  };

  const handleSetLimit = (limit: number) => {
    setLimitTab(limit);
  };

  //lay du lieu detail
  const accountDetail = idDetail === 0 ? null : getAccountDetail(idDetail);

  return (
    <>
      <div className="bg-white w-full h-full rounded-xl flex flex-col ">
        <AccountTabHeader handlePageHeader={handlePageHeader} />
        <AccountTabTable
          data={accountsListTable.data?.users}
          isLoading={accountsListTable.isLoading}
          handleToSearch={handleToSearch}
          totalTab={totalTab}
        />
        <AccountTabFooter
          pagination={isShowPagination}
          limitTab={limitTab}
          skipTab={skipTab}
          totalTab={totalTab}
          searching={searching}
          searchResult={searchResult}
          handlePaginationChange={handlePaginationChange}
          handleSetLimit={handleSetLimit}
        />
      </div>
      <div>
        {showDetail && (
          <AccountDetail
            data={accountDetail?.data}
            isLoading={accountDetail?.isLoading}
          />
        )}
      </div>
    </>
  );
};

export default AccountTab;

//loader before go to account page
export function loaderNew() {
  return redirect('tab?limit=10&page=1');
}

//return search params before go /vinova
export function loaderMale() {
  return '/filter?key=gender&value=male';
}

//return search params before go /partner
export function loaderFemale() {
  return '/filter?key=gender&value=female';
}

// get key and value in url and return params for api
export const loaderFilter: LoaderFunction = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const key = searchParams.get('key');
  const value = searchParams.get('value');
  return `/filter?key=${key}&value=${value}`;
};

// get limit and page in url and return params for api
export const loaderTab: LoaderFunction = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const limitStr = searchParams.get('limit');
  const pageStr = searchParams.get('page');
  const limit = limitStr && parseInt(limitStr);
  const page = pageStr && parseInt(pageStr);
  if (limit && page) {
    const skip = Math.ceil((page - 1) * limit);
    return `?limit=${limit}` + '&' + `skip=${skip}`;
  }
  return redirect('/accounts/notfound');
};
