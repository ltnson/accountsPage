import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      sx={{
        width: '20px',
        height: '20px',
        '&:hover': {
          cursor: 'default',
        },
      }}
    >
      <g id="Base/search">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.04163 8.75033C1.04163 4.49315 4.49278 1.04199 8.74996 1.04199C13.0071 1.04199 16.4583 4.49315 16.4583 8.75033C16.4583 13.0075 13.0071 16.4587 8.74996 16.4587C4.49278 16.4587 1.04163 13.0075 1.04163 8.75033ZM8.74996 2.29199C5.18314 2.29199 2.29163 5.1835 2.29163 8.75033C2.29163 12.3171 5.18314 15.2087 8.74996 15.2087C12.3168 15.2087 15.2083 12.3171 15.2083 8.75033C15.2083 5.1835 12.3168 2.29199 8.74996 2.29199Z"
          fill="#333333"
        ></path>
        <path
          id="Vector (Stroke)_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4005 13.4008C13.6445 13.1568 14.0403 13.1568 14.2843 13.4008L17.8199 16.9364C18.064 17.1804 18.064 17.5762 17.8199 17.8203C17.5758 18.0643 17.1801 18.0643 16.936 17.8203L13.4005 14.2847C13.1564 14.0406 13.1564 13.6449 13.4005 13.4008Z"
          fill="#333333"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default SearchSVG;
