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
import AccountFilter from '../account-carts/filter/AccountFilter';

const AccountTabTable = () => {
  // get url after loader in router return
  const url = useLoaderData() as string;
  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    setPathName(url);
  }, [url]);

  const { setTotalTab, setSearchResult, setSearching, showArr } =
    useContext(AccountContext);

  //get data of table
  const { data, isLoading, error } = getAccountsLimit(pathName);

  //check data
  useEffect(() => {
    if (error) {
      catchErr(error);
    }
    if (data) {
      setTotalTab(data.total);
      setSearchResult(data.limit);
    }
  }, [error, data]);

  //search and reget data of table
  const handleToSearch = (e: string) => {
    if (e === '') {
      setSearching(false);
      return setPathName(url);
    }
    setSearching(true);
    setPathName(`/search?q=${e}`);
  };

  return (
    <div className="tab-table">
      <div
        className={`grow flex flex-col flex-nowrap h-full transition-width duration-300 ease-in-out ${
          showArr.filter ? 'xl:w-[calc(100%-650px)]' : 'w-full'
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
          showArr.filter
            ? 'w-full h-auto xl:w-80 xl:pl-3 pt-7'
            : 'w-0 h-0 transition-width duration-300 ease-in-out'
        }`}
      >
        <AccountFilter />
      </div>
    </div>

    /////
    // <div className="w-full tab-table ">
    //   <Toaster />
    //   <Typography
    //     component="div"
    //     sx={{
    //       '@media (min-width: 1280px)': {
    //         width: '100%',
    //         display: 'grid',
    //         gridTemplateColumns: '1fr 320px',
    //         gridTemplateRows: 'auto auto',
    //         gridTemplateAreas:
    //           "'header  sidebar' 'main  sidebar' 'main  sidebar'",
    //       },
    //     }}
    //   >
    //     <Typography
    //       component="div"
    //       sx={{
    //         '@media (min-width: 1280px)': { gridArea: 'header' },
    //       }}
    //     >
    //       <div className="grow-0 sm:py-[28px] py-3 flex flex-wrap ">
    //         <TextField
    //           placeholder="Search"
    //           className="search-account"
    //           size="small"
    //           onChange={(e) => handleToSearch(e.target.value)}
    //           InputProps={{
    //             startAdornment: (
    //               <InputAdornment position="start">
    //                 <SearchSVG />
    //               </InputAdornment>
    //             ),
    //           }}
    //         />
    //         <TabHeadFilter />
    //       </div>
    //     </Typography>
    //     <Typography
    //       component="div"
    //       sx={{ '@media (min-width: 1280px)': { gridArea: 'sidebar' } }}
    //     >
    //       <div
    //         className={`transition-width duration-300 ease-in-out ${
    //           showArr.filter
    //             ? 'w-full h-auto xl:w-80 xl:pl-3 pt-7'
    //             : 'w-0 h-0 transition-width duration-300 ease-in-out'
    //         }`}
    //       >
    //         <AccountFilter />
    //       </div>
    //     </Typography>
    //     <Typography
    //       component="div"
    //       sx={{
    //         '@media (min-width: 1280px)': { gridArea: 'main' },
    //       }}
    //     >
    //       {data?.users && (
    //         <TableContainer className="scroll-style">
    //           <Table border={1}>
    //             <HeadTab />
    //             <BodyTab accountsArray={data.users} />
    //           </Table>
    //         </TableContainer>
    //       )}
    //       {isLoading && (
    //         <div className="w-full p-8 h-full flex justify-center items-center">
    //           <CircularProgress size="lg" />
    //         </div>
    //       )}
    //     </Typography>
    //   </Typography>
    // </div>
  );
};

export default AccountTabTable;
