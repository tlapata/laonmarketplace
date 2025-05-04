
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
<Svg {...props} onClick={props.onClick} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84143 4.67057C7.84143 6.42158 6.4219 7.84114 4.67072 7.84114C2.91953 7.84114 1.5 6.42158 1.5 4.67057C1.5 2.91956 2.91953 1.5 4.67072 1.5C6.4219 1.5 7.84143 2.91956 7.84143 4.67057Z" stroke="white" stroke-width="3"/>
<path d="M20.1173 16.9489C20.1173 18.6999 18.6978 20.1195 16.9466 20.1195C15.1954 20.1195 13.7759 18.6999 13.7759 16.9489C13.7759 15.1979 15.1954 13.7783 16.9466 13.7783C18.6978 13.7783 20.1173 15.1979 20.1173 16.9489Z" stroke="white" stroke-width="3"/>
<rect width="28.0239" height="3.08835" transform="matrix(0.707118 -0.707096 0.707118 0.707096 0 19.8154)" fill="white"/>
</Svg>
  );
};

export default Icon;
