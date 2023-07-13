import { LoaderFunction, redirect } from 'react-router-dom';

import AccountTabHeader from '../../components/account/account-tab/AccountTabHeader';
import AccountTabFooter from '../../components/account/account-tab/AccountTabFooter';
import AccountDetail from '../../components/account/account-carts/detail/AccountDetail';
import AccountUpdate from '../../components/account/account-carts/up-flie/AccountUpdate';
import AccountTabTable from '../../components/account/account-tab/AccountTabTable';

import { useSelector } from 'react-redux';
import { showDetailSelector, showUpdateSelector } from '../../store/selects';

const AccountTab = () => {
  const showUpdate = useSelector(showUpdateSelector);
  const showDetail = useSelector(showDetailSelector);

  return (
    <>
      <div className="bg-white w-full h-full rounded-xl flex flex-col ">
        <AccountTabHeader />
        <AccountTabTable />
        <AccountTabFooter />
      </div>
      <div>
        {showUpdate && <AccountUpdate />}
        {showDetail && <AccountDetail />}
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
