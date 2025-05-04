import LoanAdjustCard from "views/Marketplace/components/LoanSummaryCards/LoanAdjustCard";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "components/Dialog";
import Button from "components/Elements/Button";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SingleCardDialog: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        <Button>Adjust</Button>
      </DialogTrigger>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        size={"small"}
      >
        <DialogTitle>Adjust Loan Offer</DialogTitle>
        <LoanAdjustCard />
      </DialogContent>
    </Dialog>
  );
};

export default SingleCardDialog;
