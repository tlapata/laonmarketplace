import { useState } from "react";
import darkCloseIcon from "assets/images/darkCloseIcon.svg";
import v39 from "assets/images/vector39.svg";
import styled from "styled-components";
import useTheme from "hooks/useTheme";
import { Row, Col } from "react-bootstrap";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import modal_bg from "assets/images/loanbuilder/modal-bg.svg";

interface Iprop {
  hideCloseIcon?: boolean;
  isVisible: boolean;
  toggleSubmitModal: any;
  cardHeader?: any;
  children?: React.ReactNode;
  customHeader?: any;
  headerStyle?: any;
  bodyStyle?: any;
  size?: "rg" | "lg" | "sm" | "xs";
  showHeader?: boolean;
  isRevertColor?: any;
  headerTextStyle?: any;
  closeIconStyle?: any;
  headerClass?: string;
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
  z-index: 1002;
`;

const CustomModal = ({
  hideCloseIcon = false,
  toggleSubmitModal,
  isVisible,
  cardHeader,
  customHeader,
  children,
  headerStyle,
  bodyStyle,
  size = "rg",
  showHeader = false,
  isRevertColor,
  headerTextStyle = {},
  closeIconStyle = {},
  headerClass,
}: Iprop) => {
  const [opacity, setOpacity] = useState(0);
  const { isDark } = useTheme();
  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <StyledModal
        isOpen={isVisible}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleSubmitModal}
        onEscapeKeydown={toggleSubmitModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        size={size}
        allowScroll
      >
        {showHeader && (
          <Flex className={`${headerClass} tops`} style={{ ...headerStyle }}>
            {!customHeader ? (
              <Row>
                <Col xs={10} md={10} xl={10} lg={10}>
                  <BigText
                    style={headerTextStyle}
                    isWhite={headerStyle}
                    isRevertColor={isRevertColor}
                  >
                    {cardHeader}
                  </BigText>
                </Col>
                {!hideCloseIcon ? (
                  <Col className="d-flex align-items-center">
                    <CloseIcon
                      src={isRevertColor && !isDark ? darkCloseIcon : v39}
                      alt=""
                      onClick={toggleSubmitModal}
                      style={closeIconStyle}
                    />
                  </Col>
                ) : null}
              </Row>
            ) : (
              customHeader
            )}
          </Flex>
        )}

        <Flex
          className="mid"
          style={bodyStyle ? { ...bodyStyle, alignItems: "flex-start" } : {}}
        >
          {children}
        </Flex>
      </StyledModal>
    </ModalProvider>
  );
};

const StyledModal = Modal.styled<{ size: string; hasError: boolean }>`
  max-height:506.62px;
  max-width:1031px;
  margin-left:280px;
  margin-right:50px;
  overflow:auto;
  display: flex;
  flex:1;
  overflow:hidden;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  box-shadow: 0px 0px 50px 0px #FFFFFF17;
  .tops{
    flex:0.2;
    width : 100%;
  }
  .mid {
    flex:0.65;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    overflow-y: auto;
    background:url('${modal_bg}');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
  }
  .bottom {
    flex: 0.15;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: rgba(20, 30, 64, 0.9);
    padding-top:20px;
    padding-bottom:20px;
    padding-left:20px;
  }

  @media screen and (max-height: 850px) {
    .mid {
      flex:0.6;
    }
    .bottom {
      padding-top:0px;
      padding-bottom:0px;
    }
  }
.row-class {
  background: ${(props) => props.theme.colors.background};
  padding: 5px 10px;
}
  `;
const Flex = styled.div`
  padding: 10px 10px;
  border-radius: 7px 7px 0px 0px;
`;
const CloseIcon = styled.img`
  padding-top: 10px;
  margin-left: 7%;
  position: relative;
  z-index: 4000;
  @media screen and (max-width: 768px) {
    margin-left: 30%;
  }
`;
const BigText = styled.p<{ isWhite: boolean; isRevertColor: any }>`
  padding-left: 7%;
  font-family: Montserrat;
  position: relative;
  z-index: 4000;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: ${[
    (props) => {
      if (props.isRevertColor) {
        if (props.isWhite) {
          return props.theme.colors.backgroundInvert;
        } else {
          return "#fff";
        }
      } else {
        if (props.isWhite) {
          return "#fff";
        } else {
          return props.theme.colors.backgroundInvert;
        }
      }
    },
  ]};
  padding-top: 10px;
`;

export default CustomModal;
