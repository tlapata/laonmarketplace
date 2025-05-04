import styled from "styled-components";

const FilterBar: React.FC = ({ children }) => {
  return <Flex>{children}</Flex>;
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:relative;
  flex-wrap: nowrap;
  width: 100%;

  &:after{
    content:'';
    display: block;
    position: absolute;
    bottom: 1px;
    left: 0;
    height: 1px;
    width: 100%;
    border-bottom: 1px dashed white;
    opacity: 0.06;
  }

  .buttons-group {
    display: flex;
    margin-right: 30px;
  }

  .filters-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .checks-group {
    display: flex;
    gap: 14px;
  }

  ${({ theme }) => theme.mediaQueries.lg}{
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mediaQueries.md}{
    display: block;

    .buttons-group{
      margin: 0 0 30px;

      .loan-button {
        width: 50%;
      }
    }

    .checks-group {
      flex-wrap: wrap;
    }
  }
`;

export default FilterBar;
