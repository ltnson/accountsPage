import { InputAdornment, Typography } from '@mui/material';

const InputAdornmentForm = ({
  length,
  totalLength,
}: {
  length: number;
  totalLength: number;
}) => {
  return (
    <InputAdornment position="end" sx={{ marginTop: '20px' }}>
      <Typography className="s12-gray">
        {length}/{totalLength}
      </Typography>
    </InputAdornment>
  );
};

export default InputAdornmentForm;
