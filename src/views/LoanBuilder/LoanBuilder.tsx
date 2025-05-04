import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Overlay from "components/Overlay";

const LoanBuilder: React.FC = () => {
  return (
    <>
      <Overlay />
      <Container>
        <Main />
      </Container>
    </>
  );
};

const Container = styled.div`
  .left-arrow {
    top: calc(100% + 40px);
    transform: translateX(-50%);
    left: calc(50% - 15px);
  }
  .right-arrow {
    top: calc(100% + 40px);
    transform: translateX(-50%);
    left: calc(50% + 15px);
  }
`;

export default LoanBuilder;
