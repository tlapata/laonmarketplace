import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from "components/Dialog";
import { contentDescription, contentSubTitle, contentTitle, } from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";
import { DialogueWrapper } from "views/SectionTitle/InfoDataDialog";
import TermBtn from "./TermBtn";


type Props = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  trigger?: React.ReactElement;
};

const TermsAndConditionDialog = ({ trigger, open, setOpen }: Props) => {
  const [termsAndConditions, setTerms] = useState("");
  const [emailAddress, setEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("email");
   
    if (email && email !== null) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    const isTermSkiped = localStorage.getItem("isTermSkiped");
    if (isTermSkiped && isTermSkiped !== null) {
      setTerms(isTermSkiped);
    }
  }, []);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent size="large" className="responsive-modal">
        <DialogTitle>
          {contentTitle[Popup_Content.TERMS_AND_CONDITIONS]}
        </DialogTitle>
        <DialogueWrapper>
          <DialogTitle className="infodialog-heading">
            {contentSubTitle[Popup_Content.TERMS_AND_CONDITIONS]}
          </DialogTitle>
          <div>{contentDescription[Popup_Content.TERMS_AND_CONDITIONS]}</div>
          <TermBtn termsAndConditions={termsAndConditions} emailAddress={emailAddress} setOpen={setOpen}/>
         </DialogueWrapper>
      </DialogContent>
    </Dialog>
  );
};


export default TermsAndConditionDialog;