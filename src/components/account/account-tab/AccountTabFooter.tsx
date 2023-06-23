import { useContext } from 'react';
import { AccountContext } from '../../../store/AccountContext';
import { useLocation } from 'react-router-dom';

import {
  Button,
  MenuItem,
  TextField,
  Pagination,
  PaginationItem,
} from '@mui/material';

const AccountTabFooter = () => {
  const {
    totalTab,
    skipTab,
    setSkipTab,
    limitTab,
    setLimitTab,
    searchResult,
    opMember,
  } = useContext(AccountContext);

  const { pathname } = useLocation();

  if (pathname.includes('/accounts/search')) {
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
  if (opMember === 'vinova') {
    return (
      <div className="grow-0 p-4 text-t-light  sm:text-base text-sm">
        <p>Showing {totalTab} accounts of Vinova</p>
      </div>
    );
  }
  if (opMember === 'partner') {
    return (
      <div className="grow-0 p-4 text-t-light  sm:text-base text-sm">
        <p>Showing {totalTab} accounts of partner</p>
      </div>
    );
  }
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    console.log(skipTab, limitTab, totalTab);
    setSkipTab(value * limitTab - limitTab);
  };

  return (
    <div className="grow-0 p-2 sm:p-4 flex flex-col lg:flex-row justify-between items-center text-t-light sm:text-base text-sm">
      <p className="pb-1 lg:pb-0 ">
        Showing {skipTab + 1} to {skipTab + limitTab} of {totalTab} entries
      </p>
      <div className="flex gap-4">
        <TextField
          value={limitTab}
          select
          className="account-tab-select"
          onChange={(e) => setLimitTab(parseInt(e.target.value))}
        >
          <MenuItem value={20}>20 per page</MenuItem>
          <MenuItem value={10}>10 per page</MenuItem>
          <MenuItem value={5}>5 per page</MenuItem>
        </TextField>
        <Pagination
          count={Math.ceil(totalTab / limitTab)}
          page={Math.ceil(skipTab / limitTab + 1)}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => (
                  <Button className="btn-group-prev">Prev.</Button>
                ),
                next: () => <Button className="btn-group-next">Next</Button>,
              }}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AccountTabFooter;
