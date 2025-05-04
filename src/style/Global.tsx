import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Geist", sans-serif;
    font-size: 1rem;
    letter-spacing: -0.32px;
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.text};
    overflow-x:hidden;
    min-height:100vh;
    padding:0;
    margin:0;

    .icon-svg-wrapper {
      display: block;
      background: rgba(255, 255, 255, 0.03);
      width: 54px;
      height: 54px;
      line-height: 52px;
      text-align: center;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
  
      svg {
        fill: ${({ theme }) => theme.colors.purple};
      }
  
      &:hover{
        background: rgba(255, 255, 255, 0.1);
  
        svg {
          fill: ${({ theme }) => theme.colors.textAccent};
        }
      }

      &.active{
        svg {
          fill: ${({ theme }) => theme.colors.textAccent};
        }
      }
    }

    .mobile-only {
      display: none;

      ${({ theme }) => theme.mediaQueries.md} {
        display: block;
      }
    }

    h5 {
      color: #AEB9E1;
      opacity: 0.3;
      font-size: ${(props) => props.theme.fonts.sm}rem;
      font-weight: 700;
      letter-spacing: 3.6px;
      text-transform: uppercase;
      margin: 0;
      padding: 0;
    }

    label.default {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.4;
      font-size: ${(props) => props.theme.fonts.sm}rem;
      font-style: normal;
      font-weight: 600;
      letter-spacing: -0.24px;
      display:block;
    }


    .custom-tooltip{
      padding: 10px !important;
    }
    .small-screen-only {
      display:none;
    }
    .big-screen-only {
      display:block;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    ${({ theme }) => theme.mediaQueries.md} {
      .small-screen-only {
        display:block;
      }
      .big-screen-only {
        display:none;
      }
    }  
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .errorToast{
    background: red !important;
    color: white;
  }
  .successToast{
    background: green !important;
    color: white;
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
  .slick-dots li button:before{
    color: white !important;
  }
  .slick-dots li.slick-active button:before{
    color: white !important;
  }
  .slick-slider{
    margin: 0 31px 0 28px;
  }
  .TVChartContainer {
    padding-right: 20px;
    iframe {
      width: 100% !important;
      ${({ theme }) => theme.mediaQueries.md}{
       height: 331px;
      }
    }
    ${({ theme }) => theme.mediaQueries.md}{
      padding-right: 0;
    }
  }
  .myslider{
    width: 90%;
  }
  .slick-prev:before{
    content: none !important;
  }
  .slick-next:before {
    content: none !important;
}
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.drawerBackground};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbarThumbBg};
    border-radius: 69.6758px;
  }
  .pointer {
    cursor: pointer;
  }
  .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper{
    background: ${(props) =>
    props.theme.isDark
      ? "rgba(6, 3, 27, 0.8)"
      : "rgba(255, 255, 255, 0.8)"} !important;
    box-shadow: 0px 4px 75px 26px rgba(217, 152, 255, 0.25) !important;
    backdrop-filter: blur(8px) !important;
    border-radius: 20px 0px 0px 20px !important;
  }
  .css-12i7wg6-MuiPaper-root-MuiDrawer-paper{
    background: ${(props) =>
    props.theme.isDark ? ({ theme }) => theme.colors.blockBG : "white"} !important;


  }
  .css-19sorhm-MuiButtonBase-root-MuiListItemButton-root:hover{
    background-color:transparent !important;
  }

  .MuiList-padding{
    padding: 0 0 !important;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    .sc-gzVnrw{
      grid-template-columns:repeat(2,1fr) !important;
      grid-template-rows: auto !important;
      width: 100% !important;
      padding:0 10px !important;
      grid-gap:20px !important;
    }
    .sc-bZQynM{
      grid-template-columns: repeat(1,100%) !important;
      padding-left:0 !important;
    }

  }
`;

export default GlobalStyle;