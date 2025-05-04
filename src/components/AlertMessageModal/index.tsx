import { Dialog, DialogContent, DialogTitle } from "components/Dialog";
import ModalBg from "assets/images/messageModal.png";
import { useModal } from "state/hooks";
import Button from "components/Elements/Button";
import { Routes } from "config/constants/routes";
import { useHistory } from "react-router-dom";
import { loanCreated } from "views/Marketplace/api/getLoanOffers";
import { SubscriptionType } from "config/constants/subscriptions";

type Props = {
  open: boolean;
  msg: string;
  createdLoan: loanCreated;
  setCreatedLoan: React.Dispatch<React.SetStateAction<loanCreated>>;
  type:string;
};

const AlertMessageModal = ({
  open,
  msg,
  createdLoan,
  setCreatedLoan,
  type
}: Props) => {
  const { setAlert } = useModal();
  const history = useHistory();

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setAlert("",false, "")}
        className="loantype-modal error-message"
        onClick={(e) => e.stopPropagation()}
        type={type}
        size="large"
      >
        <DialogTitle>
          {msg}
        </DialogTitle>
        {createdLoan.type === SubscriptionType.CREATE_LOAN && (
          {/*<div className="text-center">
            <Button
              onClick={() => {
                history.push(`${Routes.DETAILS}/${createdLoan.loan.id}`);
                setCreatedLoan({
                  type: "",
                  loan: null,
                });
                setAlert("", false);
              }}
            >
              Show me my Loan Offer
            </Button>
            </div>*/}
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AlertMessageModal;
