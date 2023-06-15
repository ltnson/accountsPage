import { TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../../store/AccountContext";

const ItemTab = ({ data }: { data: any }) => {
  const { setShowDetail } = useContext(AccountContext);
  return (
    <>
      <TableRow>
        <TableCell>{data}</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>1</TableCell>
        <TableCell>
          <button onClick={() => setShowDetail(true)}>test</button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ItemTab;
