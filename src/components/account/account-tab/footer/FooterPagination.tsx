import {
  MenuItem,
  TextField,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  limitTabSelector,
  skipTabSelector,
  totalTabSelector,
} from '../../../../store/selects';
import { accountsSlice } from '../../../../store/slice/AccountSlice';
import { useQueryClient } from '@tanstack/react-query';
import typeApi from '../../../../api/typeApi';

const FooterPagination = () => {
  const totalTab = useSelector(totalTabSelector);
  const skipTab = useSelector(skipTabSelector);
  const limitTab = useSelector(limitTabSelector);
  const dispatch = useDispatch();
  const { setSkipTab, setLimitTab } = accountsSlice.actions;
  const queryClient = useQueryClient();

  const callAheadPageNext = () => {
    if (limitTab + skipTab >= totalTab) {
      return;
    }
    queryClient.prefetchQuery(
      ['limit', `?limit=${limitTab}` + '&' + `skip=${skipTab + limitTab}`],
      {
        queryFn: () =>
          typeApi.getAccounts(
            `?limit=${limitTab}` + '&' + `skip=${skipTab + limitTab}`,
          ),
        staleTime: 1000 * 10,
      },
    );
  };
  const callAheadPagePrev = () => {
    if (skipTab === 0) {
      return;
    }
    queryClient.prefetchQuery(
      ['limit', `?limit=${limitTab}` + '&' + `skip=${skipTab - limitTab}`],
      {
        queryFn: () =>
          typeApi.getAccounts(
            `?limit=${limitTab}` + '&' + `skip=${skipTab + limitTab}`,
          ),
        staleTime: 1000 * 10,
      },
    );
  };

  //using pagination of MUI for set limit and skip
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(setSkipTab(value * limitTab - limitTab));
  };

  return (
    <div className="flex gap-1.5">
      <TextField
        value={limitTab}
        select
        className="account-tab-select"
        onChange={(e) => dispatch(setLimitTab(parseInt(e.target.value)))}
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
                <div onMouseEnter={callAheadPagePrev}>
                  <Typography className="btn-group-prev s14-gray">
                    Prev.
                  </Typography>
                </div>
              ),
              next: () => (
                <div onMouseEnter={callAheadPageNext}>
                  <Typography className="btn-group-next s14-gray">
                    Next
                  </Typography>
                </div>
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
