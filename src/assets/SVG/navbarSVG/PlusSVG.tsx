import { SvgIcon, SvgIconProps } from '@mui/material';

const PlushSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
      sx={{ height: '16px' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0261 4.04199C10.3713 4.04245 10.6508 4.32263 10.6503 4.66781L10.635 16.3345C10.6346 16.6797 10.3544 16.9591 10.0092 16.9587C9.66401 16.9582 9.38456 16.678 9.38501 16.3328L9.4003 4.66617C9.40075 4.321 9.68094 4.04154 10.0261 4.04199Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.54163 10.5C3.54163 10.1548 3.82145 9.875 4.16663 9.875H15.8333C16.1785 9.875 16.4583 10.1548 16.4583 10.5C16.4583 10.8452 16.1785 11.125 15.8333 11.125H4.16663C3.82145 11.125 3.54163 10.8452 3.54163 10.5Z"
        fill="white"
      ></path>
    </SvgIcon>
  );
};

export default PlushSVG;
