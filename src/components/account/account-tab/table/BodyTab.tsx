import { TableBody, TableRow, TableCell } from "@mui/material";

const BodyTab = () => {
  const tes: number[] = [
    1, 2, 3, 1, 2, 12, 1, 1, 1, 1, 21, 12, 21, 2, 21, 21, 21, 21, 21, 21, 21,
    21, 2, 2, 21, 12, 12, 21, 21, 2, 21, 21, 21, 21, 21, 21, 12, 21,
  ];
  return (
    <TableBody>
      {tes.map((t) => (
        <TableRow>
          <TableCell>{t}</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BodyTab;
