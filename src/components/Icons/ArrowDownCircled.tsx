import React from "react";

interface IProps {
  color: string;
  iconSize?: string;
}

const iconSizes = {
  sm: 15,
  xs: 5,
};

const ArrowDownCircled: React.FC<IProps & React.SVGAttributes<SVGElement>> = ({
  color,
  iconSize,
  ...rest
}) => (
  <svg
    width={iconSizes[iconSize]}
    height={iconSizes[iconSize]}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0.648437 7.5C0.648437 3.35786 4.0063 0 8.14844 0C12.2906 0 15.6484 3.35786 15.6484 7.5C15.6484 11.6421 12.2906 15 8.14844 15C4.0063 15 0.648437 11.6421 0.648437 7.5ZM2.2156 7.5C2.2156 10.7766 4.87182 13.4328 8.14844 13.4328C11.4251 13.4328 14.0813 10.7766 14.0813 7.5C14.0813 4.22339 11.4251 1.56716 8.14844 1.56716C4.87182 1.56716 2.2156 4.22339 2.2156 7.5ZM8.14844 7.91045L9.79585 6.23697C10.1019 5.93096 10.598 5.93096 10.904 6.23697C11.21 6.54298 11.21 7.03911 10.904 7.34512L8.6652 9.58393C8.35919 9.88994 7.86306 9.88994 7.55705 9.58393L5.31824 7.34512C5.01223 7.03911 5.01223 6.54298 5.31824 6.23697C5.62425 5.93096 6.12039 5.93096 6.42639 6.23697L8.14844 7.91045Z"
      fill={color}
    />
  </svg>
);

export default ArrowDownCircled;
