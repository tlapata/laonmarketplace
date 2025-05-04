import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "components/Dialog";
import CancelBg from "assets/images/cancelDialog.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TL from "assets/images/loanbuilder/top-left.svg";
import BR from "assets/images/loanbuilder/bottom-right.svg";
import Frame from "assets/images/loanbuilder/frame.png";
import Edit from "assets/images/loanbuilder/edit-icon.svg";
import SubmitBtn from "./SubmitBtn";
import SkipBtn from "./SkipBtn";

type Props = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  trigger?: React.ReactElement;
};

const EmailDialogue = ({ trigger, open, setOpen }: Props) => {
  const [emailAddress, setEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email && email !== null) {
      setEmail(email);
    }
  }, []);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={() => open && setOpen(false)}
        onClick={(e) => e.stopPropagation()}
        size="small"
        className="email-modal"
      >
        <DialogTitle style={{ textAlign: "center", fontSize: 16 }}>
          Add Email For Alerts
        </DialogTitle>
        <Form>
          <FormGroup style={{ position: "relative" }}>
            <EmailInput
              type="email"
              value={emailAddress}
              onChange={(e) => setEmail(e.target.value)}
            ></EmailInput>
          </FormGroup>
        </Form>
        <ButtonGroup>
          <SubmitBtn emailAddress={emailAddress} setOpen={setOpen} />
          <SkipBtn setOpen={setOpen} />
        </ButtonGroup>
      </DialogContent>
    </Dialog>
  );
};
const EmailInput = styled.input`
  border: none;
  outline: 0;
  font-weight: bold;
  width: 268px;
  text-align: center;
  background-image: url(${TL}), url(${BR}), url(${Frame}), url(${Edit});
  background-position: top left, bottom right, center, center right 12px;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-color: transparent;
  background-size: auto, auto, 94% 77%, auto;
  background-origin: padding-box, padding-box, padding-box, padding-box;
  padding: 10px 50px 10px 50px;
  &:focus {
    border: none;
    box-shadow: none;
  }
  @media (max-width: 1280px) {
    width: 117px;
    height: 31px;
    padding: 10px 50px 10px 0px;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 30px;
  .cancel-btn {
    min-width: 130px;
    margin: 0 20px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 35px 26px 0 26px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  .dollar {
    position: absolute;
    right: 36px;
    font-size: 17px;
    font-weight: 600;
    top: 26px;
    @media (max-width: 1280px) {
      top: 26px;
    }
    @media (min-width: 1281px) {
      top: 36px;
    }
  }
  .days {
    position: absolute;
    right: 33px;
    top: 26px;
    @media (max-width: 1280px) {
      top: 26px;
    }
    @media (min-width: 1281px) {
      top: 36px;
    }
  }
  .label {
    font-family: Organetto Semi Bold;
    font-style: normal;
    font-weight: 800;
    font-size: 12.504px;
    text-transform: uppercase;

    text-align: center;

    color: #ffffff;
    @media (max-width: 1280px) {
      font-size: 9px !important;
    }
  }
  .fancyInputWrapper {
    position: relative;
    .inputField {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: none;
      border: none;
      width: 70%;
      outline: 0;
      color: #ffffff;
      text-align: center;
      caret-color: white;
      word-wrap: break-word;
      font-family: Jost Bold;
      font-style: normal;
      font-weight: bold;
      font-size: 14.504px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.md}  {
    width: 100%;
    align-items: center;
    input {
      width: 50%;
    }
  }
`;
export default EmailDialogue;
