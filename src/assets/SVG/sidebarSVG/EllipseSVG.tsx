import { SvgIcon, SvgIconProps } from "@mui/material";

const EllipseSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon role="img" viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="20" fill="#D2D2D2"></circle>
    </SvgIcon>
  );
};

export default EllipseSVG;
