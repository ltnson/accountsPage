import { useContext } from 'react';
import { AccountContext } from '../../../store/AccountContext';
import { useLocation } from 'react-router-dom';

import { Button, ButtonGroup, MenuItem, TextField } from '@mui/material';

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
  const ar: number[] = [1, 2, 3, 4, 5];

  if (pathname.includes('/accounts/search')) {
    return (
      <div className="grow-0 p-4 text-t-light">
        <p>
          Showing {searchResult} of {totalTab} total
        </p>
      </div>
    );
  }
  if (pathname.includes('/accounts/filter')) {
    return (
      <div className="grow-0 p-4 text-t-light">
        <p>
          Showing {searchResult} of {totalTab} total
        </p>
      </div>
    );
  }
  if (opMember === 'vinova') {
    return (
      <div className="grow-0 p-4 text-t-light">
        <p>Showing {totalTab} accounts of Vinova</p>
      </div>
    );
  }
  if (opMember === 'partner') {
    return (
      <div className="grow-0 p-4 text-t-light">
        <p>Showing {totalTab} accounts of partner</p>
      </div>
    );
  }

  return (
    <div className="grow-0 p-4 flex flex-col sm:flex-row justify-between items-center text-t-light">
      <p>
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
        <ButtonGroup>
          <Button
            className="btn-group"
            onClick={() => skipTab !== 0 && setSkipTab(skipTab - limitTab)}
          >
            Prev.
          </Button>
          {ar.map((a, index) => (
            <Button
              className={`btn-group-n ${
                skipTab === index * limitTab && 'btn-group-active'
              }`}
              key={index}
              onClick={() => setSkipTab(limitTab * index)}
            >
              {a}
            </Button>
          ))}
          <Button
            className="btn-group"
            onClick={() =>
              skipTab + limitTab < totalTab && setSkipTab(skipTab + limitTab)
            }
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default AccountTabFooter;
