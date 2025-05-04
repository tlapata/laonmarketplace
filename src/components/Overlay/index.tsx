import { useLoanData } from "state/hooks";
import styled from "styled-components";

const Overlay = () => {
  const { drawer } = useLoanData();

  return <OverlayItem value={drawer} />;
};

const OverlayItem = styled.div<{ value: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.value ? "332px" : "0px")};
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    left: ${(props) => (props.value ? "0px" : "0px")};
  }
`;

export default Overlay;
