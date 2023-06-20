import { SvgIcon, SvgIconProps } from '@mui/material';

const EyeClosed = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 256 256"
      {...props}
      sx={{
        width: '18px',
        height: '18px',
      }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></line>
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></line>
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></line>
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></line>
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></path>
    </SvgIcon>
  );
};

export default EyeClosed;
