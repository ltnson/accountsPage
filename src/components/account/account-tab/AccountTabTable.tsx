import { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import { getAccountsLimit, catchErr } from '../../../hooks/Accounts';
import { Toaster } from 'react-hot-toast';

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
import { useDispatch, useSelector } from 'react-redux';
import { showFilterSelector } from '../../../store/selects';
import { accountsSlice } from '../../../store/slice/AccountSlice';

const AccountTabTable = () => {
  // get url after loader in router return
  const url = useLoaderData() as string;
  const [pathName, setPathName] = useState<string>(url);
  const showFilter = useSelector(showFilterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setPathName(url);
  }, [url]);

  //get data of table
  const { data, isLoading, error } = getAccountsLimit(pathName);

  //check data
  useEffect(() => {
    if (error) {
      catchErr(error);
    }
    if (data) {
      dispatch(accountsSlice.actions.setTotalTab(data.total));
      dispatch(accountsSlice.actions.setSearchResult(data.limit));
    }
  }, [error, data]);

  //search and reget data of table
  const handleToSearch = (e: string) => {
    if (e === '') {
      dispatch(accountsSlice.actions.setSearching(false));
      return setPathName(url);
    }
    setTimeout(() => {
      dispatch(accountsSlice.actions.setSearching(true));
      setPathName(`/search?q=${e}`);
    }, 1000);
  };

  return (
    <div className="tab-table">
      <div
        className={`grow flex flex-col flex-nowrap h-full transition-width duration-300 ease-in-out ${
          showFilter ? 'xl:w-[calc(100%-650px)]' : 'w-full'
        }`}
      >
        <Toaster />
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
          <TabHeadFilter />
        </div>
        {data?.users && (
          <TableContainer className="scroll-style">
            <Table border={1}>
              <HeadTab />
              <BodyTab accountsArray={data.users} />
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
