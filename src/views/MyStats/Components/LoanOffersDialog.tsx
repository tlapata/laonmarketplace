import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "components/Dialog";
import LoanAdjustCard from "./LoanAdjustCard";
import { useState } from "react";
import styled from "styled-components";

type Opts = {
  canDismiss: boolean;
  canAdjust: boolean;
  onAdjust: () => void;
  offerType: "private" | "public";
  loanLink: string;
  setLoanAdjustData: any;
};

type Props = {
  trigger: React.ReactElement;
  loanData: any;
};

const LoanOffersDialog: React.FC<Props> = ({ trigger, loanData }) => {
  const [adjust, setAdjust] = useState(false);
  const [, setLoanAdjustData] = useState(null);
  const setAdjustData = (data) => {
    setLoanAdjustData(data);
  };

  const loanOffersOpts: Opts = {
    canDismiss: true,
    canAdjust: true,
    onAdjust: () => setAdjust(true),
    offerType: "private",
    loanLink: "https://www.example.com",
    setLoanAdjustData: setAdjustData,
  };
  
  return (
    <Dialog open={adjust} onOpenChange={setAdjust}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={() => setAdjust(true)}
        size={adjust ? "small" : "large"}
      >
        <DialogTitle>
          Adjust Loan Offer
        </DialogTitle>
        <SliderWrapper>
          <LoanAdjustCard
            setAdjust={setAdjust}
            data={{ ...loanData, ...loanOffersOpts }}
          />
        </SliderWrapper>
      </DialogContent>
    </Dialog>
  );
};

const SliderWrapper = styled.div`
  .slick-slider {
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(16px);
    cursor: pointer;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translateY(16px);
    cursor: pointer;
  }
`;
export default LoanOffersDialog;
