import { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../../store/AccountContext';
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

const AccountTabTable = () => {
  const url = useLoaderData() as string;
  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    setPathName(url);
  }, [url]);

  const { setTotalTab, setSearchResult, setSearching } =
    useContext(AccountContext);

  const { data, isLoading, error } = getAccountsLimit(pathName);

  useEffect(() => {
    if (error) {
      catchErr(error);
    }
    if (data) {
      setTotalTab(data.total);
      setSearchResult(data.limit);
    }
  }, [error, data]);

  const handleToSearch = (e: string) => {
    if (e === '') {
      setSearching(false);
      return setPathName(url);
    }
    setSearching(true);
    setPathName(`/search?q=${e}`);
  };

  return (
    <div className="px-2 sm:px-5 pb-3 sm:pb-5 border-b border-t-neutral/d2 grow flex flex-col flex-nowrap overflow-auto">
      <Toaster />
      <div className="grow-0 sm:py-[28px] py-3 flex flex-wrap">
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
  );
};

export default AccountTabTable;
