import { TableCell, TableHead, TableRow } from "@mui/material";
import SortTwoSVG from "../../../../assets/SVG/accountsSVG/SortTwoSVG";

const HeadTab = () => {
  const headerData: string[] = [
    "ID",
    "First Name",
    "Alias",
    "Email",
    "Team",
    "Company",
    "Posision",
    "Role",
    "Status",
    "Action",
  ];
  return (
    <TableHead>
      <TableRow>
        {headerData.map((title) => (
          <TableCell>
            <div className="flex flex-nowrap gap-2 justify-between items-center">
              <p className="text-t-light">{title}</p>
              <SortTwoSVG />
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTab;