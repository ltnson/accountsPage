import AccountTabHeader from "../components/account-tab/AccountTabHeader";
import AccountTabTable from "../components/account-tab/AccountTabTable";
import AccountTabFooter from "../components/account-tab/AccountTabFooter";

const AccountTab = () => {
  return (
    <div className="bg-account-page w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4">
      <div className="bg-white w-full h-full rounded-xl flex flex-col">
        <AccountTabHeader />
        <AccountTabTable />
        <AccountTabFooter />
      </div>
    </div>
  );
};

export default AccountTab;
