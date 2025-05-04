import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../SliderArrows";
import styled from "styled-components";

type CarousalProps = {
  rows?: number;
  arrows?: boolean;
  wrap?: boolean;
  slides?: number;
  children?: React.ReactNode;
};

const Carousal: React.FC<CarousalProps> = ({
  children,
  rows = 2,
  slides = 5,
  wrap,
  arrows = true,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    rows,
    arrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  if (wrap) {
    return (
      <StyledContainer>
        <Slider {...settings}>{children}</Slider>
      </StyledContainer>
    );
  }

  return <Slider {...settings}>{children}</Slider>;
};

const StyledContainer = styled.div`
  width: 315px; // for 1 card to show
  @media (min-width: 600px) {
    width: 600px;
  }
  @media (min-width: 970px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
  @media (min-width: 1450px) {
    width: 1200px;
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: -25px;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: -25px;
  }
`;

export default Carousal;
