import styled from "styled-components";

type ButtonProps = {
  size?: "small" | "medium" | "large";
};

const Button = styled.button<ButtonProps>`
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blockBG};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  outline: 0;
  padding: ${({ size }) => (size === "large" ? "10px" : "30px 50px")};
  position: relative;
  white-space: nowrap;

  span{
    position: relative;
    z-index: 3;
  }

  &::after{
    content: '';
    background: linear-gradient(to right, #8CEBE7, #6567D1);
    display: block;
    height: 3px;
    width: 100%;
    opacity: 0.2;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  &.loan-button {
    &[data-state="active"] {
      color: ${({ theme }) => theme.colors.textAccent};

      &::after{
        opacity: 1;
      }
      &::before{
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.14;
        background: linear-gradient(180deg, rgba(8, 17, 41, 0.00) 0%, #79A9DC 100%);
        z-index: 1;
      }
    }
  }
  
 
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ size }) => (size === "large" ? "10px" : "20px")};
  }
`;

export default Button;
