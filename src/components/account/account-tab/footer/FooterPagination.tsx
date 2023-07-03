import { useContext } from 'react';
import { AccountContext } from '../../../../store/AccountContext';

import {
  MenuItem,
  TextField,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';

const FooterPagination = () => {
  const { setSkipTab, setLimitTab, totalTab, skipTab, limitTab } =
    useContext(AccountContext);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSkipTab(value * limitTab - limitTab);
  };

  return (
    <div className="flex gap-1.5">
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
                <Typography className="btn-group-prev s14-gray">
                  Prev.
                </Typography>
              ),
              next: () => (
                <Typography className="btn-group-next s14-gray">
                  Next
                </Typography>
              ),
            }}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default FooterPagination;
