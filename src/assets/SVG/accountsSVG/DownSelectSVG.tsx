import { SvgIcon, SvgIconProps } from '@mui/material';

const DownSelectSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      sx={{ width: '20px', height: '20px', marginTop: '2px' }}
    >
      <g id="Arrows/down">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.97456 7.05806C5.21864 6.81398 5.61437 6.81398 5.85845 7.05806L10.4165 11.6161L14.9746 7.05806C15.2186 6.81398 15.6144 6.81398 15.8584 7.05806C16.1025 7.30214 16.1025 7.69786 15.8584 7.94194L10.8584 12.9419C10.6144 13.186 10.2186 13.186 9.97456 12.9419L4.97456 7.94194C4.73048 7.69786 4.73048 7.30214 4.97456 7.05806Z"
          fill="#666666"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default DownSelectSVG;
