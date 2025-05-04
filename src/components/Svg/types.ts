import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
  imagesArray?: string[];
  fillcolor?: string;
  strokecolor?: string;
  imageUrl?: string;
  number?: any;
  apy1?: string;
  apy2?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  customApy?: any;
  active?: boolean;
  index?: any;
  onClick?: any;
  ref?: any;
}
