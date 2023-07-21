import FooterContent from './footer/FooterContent';

import {
  MenuItem,
  TextField,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';

const AccountTabFooter = ({
  pagination,
  limitTab,
  totalTab,
  skipTab,
  searchResult,
  searching,
  handlePaginationChange,

  handleSetLimit,
}: {
  pagination: boolean;
  limitTab: number;
  skipTab: number;
  totalTab: number;
  searchResult: number;
  searching: boolean;
  handlePaginationChange: (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => void;
  handleSetLimit: (e: number) => void;
}) => {
  return (
    <div className="tab-footer">
      <FooterContent
        limitTab={limitTab}
        skipTab={skipTab}
        totalTab={totalTab}
        searchResult={searchResult}
        searching={searching}
      />
      {pagination && (
        <div className="flex gap-1.5">
          <TextField
            value={limitTab}
            select
            className="account-tab-select"
            onChange={(e) => handleSetLimit(parseInt(e.target.value))}
          >
            <MenuItem value={20}>20 per page</MenuItem>
            <MenuItem value={10}>10 per page</MenuItem>
            <MenuItem value={5}>5 per page</MenuItem>
          </TextField>
          <Pagination
            count={Math.ceil(totalTab / limitTab)}
            page={Math.ceil(skipTab / limitTab + 1)}
            onChange={handlePaginationChange}
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
      )}
    </div>
  );
};

export default AccountTabFooter;
