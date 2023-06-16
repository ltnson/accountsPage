import { Table, TableContainer, TextField, Paper } from "@mui/material";
import SearchBtnSVG from "../../../assets/SVG/accountsSVG/SearchBtnSVG";
import HeadTab from "./table/HeadTab";
import BodyTab from "./table/BodyTab";
import { useContext, useEffect } from "react";
import { AccountContext } from "../../../store/AccountContext";
import { CircularProgress } from "@mui/material";
import { getAccountsLimit, catchErr } from "../../../hooks/Accounts";
import { Toaster } from "react-hot-toast";

const AccountTabTable = () => {
  const { showArr, setShowArr, limitTab, skipTab } = useContext(AccountContext);

  const { data, isLoading, error } = getAccountsLimit(limitTab, skipTab);
  useEffect(() => {
    if (error) {
      catchErr(error);
    }
  }, [error]);

  return (
    <div className="p-2 sm:p-5  border-b border-t-light grow flex flex-col gap-5 flex-nowrap overflow-auto">
      <Toaster />
      <div className="grow-0">
        <TextField
          placeholder="Search"
          className="search-account"
          size="small"
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
        <TableContainer component={Paper}>
          <Table>
            <HeadTab />
            <BodyTab accountsArray={data.users} />
          </Table>
        </TableContainer>
      )}
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <CircularProgress size="lg" />
        </div>
      )}
    </div>
  );
};

export default AccountTabTable;
