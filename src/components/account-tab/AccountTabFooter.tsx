import { Button, ButtonGroup, MenuItem, TextField } from "@mui/material";

const AccountTabFooter = () => {
  const ar: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="flex-none p-4 flex flex-col sm:flex-row justify-between items-center text-t-light">
      <p>Showing 1 to 10 of 100 entries</p>

      <div className="flex gap-4">
        <TextField
          value={10}
          select
          className="account-tab-select"
          // onChange={(e) => setLimit(e.target.value as number)}
        >
          <MenuItem value={20}>20 per page</MenuItem>
          <MenuItem value={10}>10 per page</MenuItem>
          <MenuItem value={5}>5 per page</MenuItem>
        </TextField>
        <ButtonGroup>
          <Button className="btn-group-active">Prev.</Button>
          {ar.map((a) => (
            <Button className="btn-group-n">{a}</Button>
          ))}
          <Button className="btn-group">Next</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default AccountTabFooter;
