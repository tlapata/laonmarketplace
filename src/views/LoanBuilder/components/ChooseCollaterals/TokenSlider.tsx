import Slider from "react-slick";
import styled from "styled-components";
import { useRef, useState } from "react";
import usePagination, { DOTS } from "../../../../hooks/usePagination";
import {
  PaginationRoot,
  PaginationButton,
  NextArrow,
  PrevArrow,
} from "components/Elements/Pagination";
type CarousalProps = {
  wrap?: boolean;
  row?: number;
  slides?: number;
  infinite?: boolean;
  cardSize?: "sm" | "lg";
  count?: number;
};

const TokenSlider: React.FC<CarousalProps> = ({
  slides,
  children,
  row,
  wrap,
  infinite,
  cardSize,
  count,
}) => {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const sliderRef = useRef(null);

  const responsiveSlides = {
    "768": 1,
    "1050": 3,
    "1280": cardSize === "sm" ? 4 : 3,
    "1366": 4,
    "1440": 4,
    "1680": 5,
    "1920": 6,
  };

  let initialSlidesCount = 0;
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1920) {
    initialSlidesCount = responsiveSlides["1920"];
  } else if (screenWidth >= 1440) {
    initialSlidesCount = Math.ceil(count / responsiveSlides["1680"]);
  } else if (screenWidth >= 1366) {
    initialSlidesCount = Math.ceil(count / responsiveSlides["1440"]);
  } else if (screenWidth >= 1280) {
    initialSlidesCount = Math.ceil(count / responsiveSlides["1366"]);
  } else if (screenWidth >= 1050) {
    initialSlidesCount = Math.ceil(count / responsiveSlides["1280"]);
  } else if (screenWidth <= 768) {
    initialSlidesCount = responsiveSlides["768"];
  }
  else {
    initialSlidesCount = Math.ceil(count / responsiveSlides["1050"]);
  }

  const settings = {
    pauseOnHover: true,
    dots: false,
    arrows: true,
    infinite: infinite || false,
    speed: 500,
    slidesPerRow: slides || 6,
    slidesToScroll: 1,
    rows: 1,
    onInit: () => {
      setCurrent(1);
      setTotal(initialSlidesCount);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: responsiveSlides["768"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 1));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 1));
          },
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesPerRow: responsiveSlides["1050"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 3));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 3));
          },
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: responsiveSlides["1280"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 4));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 4));
          },
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesPerRow: responsiveSlides["1366"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 4));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 4));
          },
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesPerRow: responsiveSlides["1440"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 4));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 4));
          },
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesPerRow: responsiveSlides["1680"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 5));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 5));
          },
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesPerRow: responsiveSlides["1920"],
          slidesToScroll: 1,
          infinite: infinite,
          dots: false,
          rows: 1,
          dotsClass:
            "pagination slick-dots slick-thumb d-flex justify-content-center",
          afterChange: (current) => {
            setCurrent(current + 1);
            setTotal(Math.ceil(count / 6));
          },
          onInit: () => {
            setCurrent(1);
            setTotal(Math.ceil(count / 6));
          },
        },
      },
    ],
  };

  const { range, setPage } = usePagination({
    // no idea what is initialSlidesCount
    total:
      screenWidth >= 1920
        ? Math.ceil(count / initialSlidesCount)
        : initialSlidesCount,
    siblings: 0,
  });

  if (wrap) {
    return (
      <StyledContainer>
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
        <PaginationRoot
          style={{ marginTop: 20, marginBottom: 30, zIndex: 999 }}
        >
          <PrevArrow
            disabled={current === 1}
            onClick={() => {
              sliderRef.current.slickGoTo(current - 2);
            }}
          />
          {range.map((value, index) => {
            if (value !== DOTS) {
              return (
                <PaginationButton
                  key={index}
                  data-state={current === value ? "active" : "inactive"}
                  onClick={() => {
                    setPage(value);
                    setCurrent(value);
                    sliderRef.current.slickGoTo(value - 1);
                  }}
                >
                  {value}
                </PaginationButton>
              );
            }
            return <PaginationButton disabled>...</PaginationButton>;
          })}
          <NextArrow
            disabled={current === total}
            onClick={() => {
              sliderRef.current.slickGoTo(current);
            }}
          />
        </PaginationRoot>
      </StyledContainer>
    );
  }

  return <Slider {...settings}>{children}</Slider>;
};

const StyledContainer = styled.div`
  margin-top: 87px;
`;

export default TokenSlider;
