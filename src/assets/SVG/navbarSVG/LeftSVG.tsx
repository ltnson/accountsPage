import { SvgIcon, SvgIconProps } from '@mui/material';

const LeftSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      sx={{
        '&:hover': {
          rect: {
            fill: '#F7F9FE',
          },
        },
      }}
    >
      <rect width="24" height="24" rx="12" fill="rgb(255 255 255)"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0303 5.46967C16.3232 5.76256 16.3232 6.23744 16.0303 6.53033L10.5607 12L16.0303 17.4697C16.3232 17.7626 16.3232 18.2374 16.0303 18.5303C15.7374 18.8232 15.2626 18.8232 14.9697 18.5303L8.96967 12.5303C8.67678 12.2374 8.67678 11.7626 8.96967 11.4697L14.9697 5.46967C15.2626 5.17678 15.7374 5.17678 16.0303 5.46967Z"
        fill="#5E90F0"
      ></path>
    </SvgIcon>
  );
};

export default LeftSVG;
