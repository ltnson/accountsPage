import AccountTabHeader from '../components/account/account-tab/AccountTabHeader';
import AccountTabTable from '../components/account/account-tab/AccountTabTable';
import AccountTabFooter from '../components/account/account-tab/AccountTabFooter';
import AccountDetail from '../components/account/account-carts/detail/AccountDetail';
import AccountFilter from '../components/account/account-carts/filter/AccountFilter';
import AccountUpdate from '../components/account/account-carts/up-flie/AccountUpdate';
import { useContext } from 'react';
import { AccountContext } from '../store/AccountContext';

const AccountTab = () => {
  const { showArr } = useContext(AccountContext);

  return (
    <div className="w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 ">
      <div className="bg-white w-full h-full rounded-xl flex flex-col grow-0">
        <AccountTabHeader />
        <AccountTabTable />
        <AccountTabFooter />
      </div>
      <div>
        {showArr.update && <AccountUpdate />}
        {showArr.filter && <AccountFilter />}
        {showArr.detail && <AccountDetail />}
      </div>
    </div>
  );
};

export default AccountTab;
