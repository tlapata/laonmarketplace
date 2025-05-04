import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 36 36" {...props}>
      <rect width="36" height="36" rx="18" fill={props.fillcolor} />
      <path
        d="M14.5007 19.1666C15.145 19.1666 15.6673 18.6443 15.6673 17.9999C15.6673 17.3556 15.145 16.8333 14.5007 16.8333C13.8563 16.8333 13.334 17.3556 13.334 17.9999C13.334 18.6443 13.8563 19.1666 14.5007 19.1666Z"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5007 19.1666C22.145 19.1666 22.6673 18.6443 22.6673 17.9999C22.6673 17.3556 22.145 16.8333 21.5007 16.8333C20.8563 16.8333 20.334 17.3556 20.334 17.9999C20.334 18.6443 20.8563 19.1666 21.5007 19.1666Z"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 12.75C16.8333 11.5833 19.1667 11.5833 23.25 12.75"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.166 23.25C16.2493 24.4167 19.7493 24.4167 23.8327 23.25"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.084 23.8334C22.084 25.0001 23.834 27.3334 24.4173 27.3334C26.1673 27.3334 27.7225 25.3886 28.5007 23.8334C29.2788 21.8886 29.084 17.0282 26.7507 10.4167C25.0508 9.23258 23.2507 8.85341 21.5007 8.66675L20.334 11.5834"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9168 23.8334C13.9168 25.0001 12.3348 27.3334 11.7795 27.3334C10.1123 27.3334 8.6318 25.3886 7.89096 23.8334C7.15013 21.8886 7.33563 17.0282 9.55696 10.4167C11.1763 9.23258 12.8026 8.85341 14.5001 8.66675L15.6668 11.5834"
        stroke={props.strokecolor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
