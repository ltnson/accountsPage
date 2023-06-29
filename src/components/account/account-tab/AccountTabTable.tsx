import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../store/AccountContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
import SearchBtnSVG from '../../../assets/SVG/accountsSVG/SearchBtnSVG';
import SearchSVG from '../../../assets/SVG/accountsSVG/SearchSVG';

const AccountTabTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const {
    pathName,
    showArr,
    setShowArr,
    setTotalTab,
    setSearchResult,
    limitTab,
    skipTab,
    setPathName,
    setSkipTab,
    opMember,
  } = useContext(AccountContext);

  useEffect(() => {
    if (pageNumber)
      setSkipTab(
        limitTab * (parseInt(pageNumber?.split('=')[1]) - 1) || skipTab,
      );
  }, []);

  useEffect(() => {
    navigate(`/accounts/page=${Math.ceil(skipTab / limitTab + 1)}`);
    setPathName(`?limit=${limitTab}` + '&' + `skip=${skipTab}`);
  }, [skipTab, limitTab]);

  const { data, isLoading, error } = getAccountsLimit(pathName);
  useEffect(() => {
    if (data) {
      if (location.pathname.includes('/accounts/search')) {
        setSearchResult(data.limit);
      }
      if (location.pathname.includes('/accounts/filter')) {
        setSearchResult(data.limit);
      }
      setTotalTab(data.total);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      catchErr(error);
    }
  }, [error]);

  const handleToSearch = (e: string) => {
    if (e === '') {
      if (opMember === 'vinova') {
        setPathName('/filter?key=gender&value=male');
        return navigate('/accounts/vinova');
      }
      if (opMember === 'partner') {
        setPathName('/filter?key=gender&value=female');
        return navigate('/accounts/partner');
      }
      navigate(`/accounts/page=${Math.ceil(skipTab / limitTab + 1)}`);
      return setPathName(`?limit=${limitTab}` + '&' + `skip=${skipTab}`);
    }
    navigate(`/accounts/search?q=${e}`);
    setPathName(`/search?q=${e}`);
  };

  return (
    <div className="p-2 sm:p-5  border-b border-t-neutral/d2 grow flex flex-col gap-5 flex-nowrap overflow-auto">
      <Toaster />
      <div className="grow-0">
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
        <a
          className="btn-w-a w-8 h-8 sm:w-10 sm:h-10"
          href="#"
          onClick={() => setShowArr({ ...showArr, filter: true })}
        >
          <SearchBtnSVG />
        </a>
      </div>
      {data?.users && (
        <TableContainer>
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
