import { Typography } from '@mui/material';

const LabelForm = ({ label }: { label: string }) => {
  return (
    <Typography className="s12">
      {label} <span className="pb-2 pl-1 text-add-red/100">*</span>
    </Typography>
  );
};

export default LabelForm;
