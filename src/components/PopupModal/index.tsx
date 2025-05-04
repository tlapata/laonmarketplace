import styled from "styled-components";
import ModalBg from "assets/images/ModalBg.png";
import { usePopup } from "state/hooks";
export interface ModalProps {
  content: string;
}
const PopupModal = ({ content }: ModalProps) => {
  const { setPopup } = usePopup();
  return (
    <ModalWrapper onClick={() => setPopup(null)}>
      <Modal>
        <p>{content}</p>
      </Modal>
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div`
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999999999;
  color: white;
`;
const Modal = styled.div`
  background: url(${ModalBg});
  position: relative;
  background-size: contain;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  p {
    padding: 50px;
    padding: 50px 34px 50px 50px;
    word-break: break-word;
  }
`;
export default PopupModal;
