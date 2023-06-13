import { Table, TableContainer, TextField } from "@mui/material";
import SearchBtnSVG from "../../assets/SVG/accountsSVG/SearchBtnSVG";
import HeadTab from "./table/HeadTab";
import BodyTab from "./table/BodyTab";

const AccountTabTable = () => {
  return (
    <div className="p-2 sm:p-5  border-b border-t-light grow">
      <TextField
        placeholder="Search"
        className="search-account"
        size="small"
      ></TextField>
      <a className="btn-w-a w-8 h-8 sm:w-10 sm:h-10" href="">
        <SearchBtnSVG />
      </a>

      <TableContainer>
        <Table>
          <HeadTab />
          <BodyTab />
        </Table>
      </TableContainer>
    </div>
  );
};

export default AccountTabTable;
