import { useContext } from 'react';
import { AccountContext } from '../../../../store/AccountContext';
import { useLocation } from 'react-router-dom';

const FooterContent = () => {
  const { searchResult, totalTab, skipTab, limitTab, searching } =
    useContext(AccountContext);
  const { pathname } = useLocation();

  //change content of footer table if pathname change because result of other data dont have skip table
  if (searching) {
    return (
      <div className="grow-0 p-4 text-t-light sm:text-base text-sm">
        <p>
          Showing {searchResult} of {totalTab} total
        </p>
      </div>
    );
  }
  if (pathname.includes('/accounts/filter')) {
    return (
      <div className="grow-0 p-4 text-t-light  sm:text-base text-sm">
        <p>
          Showing {searchResult} of {totalTab} total
        </p>
      </div>
    );
  }
  if (pathname.includes('vinova')) {
    return (
      <div className="grow-0 p-4 text-t-light  sm:text-base text-sm">
        <p>Showing {totalTab} accounts of Vinova</p>
      </div>
    );
  }
  if (pathname.includes('partner')) {
    return (
      <div className="grow-0 p-4 text-t-light  sm:text-base text-sm">
        <p>Showing {totalTab} accounts of partner</p>
      </div>
    );
  }

  return (
    <p className="md:pb-1 lg:pb-0 ">
      Showing {skipTab + 1} to {skipTab + limitTab} of {totalTab} entries
    </p>
  );
};

export default FooterContent;
