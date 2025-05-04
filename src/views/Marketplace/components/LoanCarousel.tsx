import Slider from "react-slick";
import { NextArrow, PrevArrow } from "components/SliderArrows";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 315px; // for 1 card to show
`;

const Carousal: React.FC<{ row?: number; wrap?: boolean; slides?: number }> = ({
  children,
  row,
  slides,
  wrap,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slides || 1,
    slidesToScroll: 1,
    rows: row || 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
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

export default Carousal;
