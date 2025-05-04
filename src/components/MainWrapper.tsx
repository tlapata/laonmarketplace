import styled from 'styled-components'

const MainWrapper = styled.div`
  min-height: 100vh;

  @media (min-width: 2560px) {
    max-width: 2000px;
    margin: 0 auto;

    #mySidenav {
      left: calc(50% - 1000px);
    }
  }
`;

export default MainWrapper;