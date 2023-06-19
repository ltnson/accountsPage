import { TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../../store/AccountContext";
import { Account } from "../../../../model/types";
import EyeSVG from "../../../../assets/SVG/accountsSVG/EyeSVG";
import WriteSVG from "../../../../assets/SVG/accountsSVG/WriteSVG";
import { useNavigate } from "react-router-dom";

const ItemTab = ({ item }: { item: Account }) => {
  const { showArr, setShowArr, setIdDetail } = useContext(AccountContext);
  const navigate = useNavigate();
  const handleShowDetail = (id: number) => {
    setShowArr({ ...showArr, detail: true });
    setIdDetail(id);
  };

  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.firstName}</TableCell>
      <TableCell>{item.lastName}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.company.name}</TableCell>
      <TableCell>{item.age}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.address.city}</TableCell>
      <TableCell>
        <p
          className={
            item.gender === "female"
              ? "bg-tag/green10 text-center rounded py-0.5 w-3/4"
              : "text-center rounded py-0.5 w-3/4"
          }
        >
          {item.gender}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <a
            href="#"
            onClick={() => handleShowDetail(item.id)}
            className="btn-show-cart"
          >
            <EyeSVG />
          </a>
          <a
            href="#"
            onClick={() => navigate(`/accounts/edit/${item.id}`)}
            className="btn-show-cart "
          >
            <WriteSVG />
          </a>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ItemTab;
