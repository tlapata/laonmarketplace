import styled from "styled-components";
import SearchIcon from "assets/icons/search.svg";

const IconInput = styled.input`
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text}; 
  border: none;
  border-radius: 4px;
  padding: 10px 20px 10px 52px;
  height: 64px;
  width: 25vw;
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0.03);
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 20px 50%;
  outline: 0;

  &::placeholder {
    color: rgba(134, 135, 188, 0.43);
    opacity: 1; /* Firefox */
  }
  
  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: rgba(134, 135, 188, 0.43);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
  }
`;

export default IconInput;
