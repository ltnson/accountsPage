import { SvgIcon, SvgIconProps } from "@mui/material";

const CloseSVG2 = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      sx={{
        margin: "3px 0",
        width: "12px",
        height: "12px",
        "&:hover": {
          path: {
            fill: "#FF424A",
          },
        },
        paddingBottom: "3px",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z"
        fill="#9DA7B9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5303 3.46967C20.8232 3.76256 20.8232 4.23744 20.5303 4.53033L4.53033 20.5303C4.23744 20.8232 3.76256 20.8232 3.46967 20.5303C3.17678 20.2374 3.17678 19.7626 3.46967 19.4697L19.4697 3.46967C19.7626 3.17678 20.2374 3.17678 20.5303 3.46967Z"
        fill="#9DA7B9"
      ></path>
    </SvgIcon>
  );
};

export default CloseSVG2;
