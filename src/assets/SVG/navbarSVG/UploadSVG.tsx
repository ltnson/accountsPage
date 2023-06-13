import { SvgIcon, SvgIconProps } from "@mui/material";

const UploadSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon role="img" viewBox="0 0 40 41" fill="none" {...props}>
      <rect y="0.5" width="40" height="40" rx="5" fill="#F7F9FE"></rect>
      <g clipPath="url(#clip0_2624_44254)">
        <mask
          id="mask0_2624_44254"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="20"
          height="21"
        >
          <path d="M30 10.5H10V30.5H30V10.5Z" fill="#333333"></path>
        </mask>
        <g mask="url(#mask0_2624_44254)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.5 19.875C27.8452 19.875 28.125 20.1548 28.125 20.5V28C28.125 28.3452 27.8452 28.625 27.5 28.625H12.5C12.1548 28.625 11.875 28.3452 11.875 28V20.5035C11.875 20.1583 12.1548 19.8785 12.5 19.8785C12.8452 19.8785 13.125 20.1583 13.125 20.5035V27.375H26.875V20.5C26.875 20.1548 27.1548 19.875 27.5 19.875Z"
            fill="#5E90F0"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5581 12.5581C19.8021 12.314 20.1979 12.314 20.4419 12.5581L24.1919 16.3081C24.436 16.5521 24.436 16.9479 24.1919 17.1919C23.9479 17.436 23.5521 17.436 23.3081 17.1919L20 13.8839L16.6919 17.1919C16.4479 17.436 16.0521 17.436 15.8081 17.1919C15.564 16.9479 15.564 16.5521 15.8081 16.3081L19.5581 12.5581Z"
            fill="#5E90F0"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9961 12.375C20.3413 12.375 20.6211 12.6548 20.6211 13V23.8333C20.6211 24.1785 20.3413 24.4583 19.9961 24.4583C19.6509 24.4583 19.3711 24.1785 19.3711 23.8333V13C19.3711 12.6548 19.6509 12.375 19.9961 12.375Z"
            fill="#5E90F0"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2624_44254">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10 10.5)"
          ></rect>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default UploadSVG;
