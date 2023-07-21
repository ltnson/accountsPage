import HeadTab from './table/HeadTab';
import BodyTab from './table/BodyTab';
import {
  Table,
  TableContainer,
  TextField,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
import SearchSVG from '../../../assets/SVG/accountsSVG/SearchSVG';
import TabHeadFilter from './table/TabHeadFilter';
import AccountFilter from '../account-carts/filter/AccountFilter';
import { useSelector } from 'react-redux';
import { showFilterSelector } from '../../../store/selects';
import { Accounts } from '../../../model/types';

const AccountTabTable = ({
  data,
  isLoading,
  handleToSearch,
  totalTab,
}: {
  data: Accounts | undefined;
  isLoading: boolean;
  handleToSearch: (e: any) => void;
  totalTab: number;
}) => {
  const showFilter = useSelector(showFilterSelector);

  return (
    <div className="tab-table">
      <div
        className={`grow flex flex-col flex-nowrap h-full transition-width duration-300 ease-in-out ${
          showFilter ? 'xl:w-[calc(100%-650px)]' : 'w-full'
        }`}
      >
        <div className="grow-0 sm:py-[28px] py-3 flex flex-wrap ">
          <TextField
            placeholder="Search"
            className="search-account"
            size="small"
            onChange={(e) => handleToSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchSVG />
                </InputAdornment>
              ),
            }}
          />
          <TabHeadFilter totalTab={totalTab} />
        </div>
        {data && (
          <TableContainer className="scroll-style">
            <Table border={1}>
              <HeadTab />
              <BodyTab accountsArray={data} />
            </Table>
          </TableContainer>
        )}
        {isLoading && (
          <div className="w-full p-8 h-full flex justify-center items-center">
            <CircularProgress size="lg" />
          </div>
        )}
      </div>
      <div
        className={`transition-width duration-300 ease-in-out ${
          showFilter
            ? 'w-full h-auto xl:w-80 xl:pl-3 pt-7'
            : 'w-0 h-0 transition-width duration-300 ease-in-out'
        }`}
      >
        <AccountFilter />
      </div>
    </div>
  );
};

export default AccountTabTable;
