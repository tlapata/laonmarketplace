import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from "components/Modal";

// state
import { resetAlert } from "state/app";

// types
import { State } from "state/types";

const AlertModal = () => {
  const { alertHeader, alertBody, alertType } = useSelector(
    (state: State) => state.app
  );
  const dispatch = useDispatch();

  return (
    <>
      {alertHeader && alertBody && alertType && (
        <Modal
          hideCloseIcon
          cardHeader={alertHeader}
          isVisible={alertHeader !== null}
          toggleSubmitModal={() => dispatch(resetAlert())}
          headerStyle={{
            background: alertType === "error" ? "#BA0C0C" : "black",
            borderRadius: "10px 10px 0px 0px",
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingRight: "0px",
          }}
          headerTextStyle={{
            fontSize: "15px",
            height: "50px",
            padding: "14px 0px 14px 19px",
            marginBottom: "0px",
            display: "contents",
          }}
          bodyStyle={{
            borderRadius: " 0px 0px 13px 13px",
            padding: "1px 0px 0px 12px",
            paddingTop: "1px",
            justifyContent: "flex-start",
          }}
          size="sm"
        >
          <Text>{alertBody}</Text>
        </Modal>
      )}
    </>
  );
};

const Text = styled.p`
  color: ${(props) => props.theme.colors.backgroundInvert};
  font-size: 14px;
  line-height: 26px;
  padding-top: 16px;
  text-align: left !important;
`;
export default AlertModal;
