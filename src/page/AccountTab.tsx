import { useContext } from 'react';
import { AccountContext } from '../store/AccountContext';
import { LoaderFunction, redirect } from 'react-router-dom';

import AccountTabHeader from '../components/account/account-tab/AccountTabHeader';
import AccountTabFooter from '../components/account/account-tab/AccountTabFooter';
import AccountDetail from '../components/account/account-carts/detail/AccountDetail';
import AccountFilter from '../components/account/account-carts/filter/AccountFilter';
import AccountUpdate from '../components/account/account-carts/up-flie/AccountUpdate';
import { Outlet } from 'react-router-dom';

const AccountTab = () => {
  const { showArr } = useContext(AccountContext);

  return (
    <>
      <div className="bg-white w-full h-full rounded-xl flex flex-col ">
        <AccountTabHeader />
        <Outlet />
        <AccountTabFooter />
      </div>
      <div>
        {showArr.update && <AccountUpdate />}
        {showArr.filter && <AccountFilter />}
        {showArr.detail && <AccountDetail />}
      </div>
    </>
  );
};

export default AccountTab;

export function loaderNew() {
  return redirect('/accounts/tab?limit=10&page=1');
}

export function loaderVinova() {
  return '/filter?key=gender&value=male';
}

export function loaderPartner() {
  return '/filter?key=gender&value=female';
}

export const loaderFilter: LoaderFunction = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const key = searchParams.get('key');
  const value = searchParams.get('value');
  return `/filter?key=${key}&value=${value}`;
};

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
