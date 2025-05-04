import { Dialog, DialogTrigger, DialogContent, DialogTitle, } from "components/Dialog";
import LoanInfoCard from "./LoanInfoCard";
import Timer from "./Timer";
import { Tabs, TabsContent } from "components/Elements/Tabs";
import { useState } from "react";
import AdjustActiveLoan from "./AdjustActiveLoan";
import styled from "styled-components";

const AdjustContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  .timer {
    position: absolute;
    top: -73px;
    right: 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
    margin:10px 0 10px 0;
    .timer {
      position:relative;
      top:0;
      right:0;
      flex-direction: column;
      display:flex;
    }
  }
`;

type Opts = {
  loanAmt: string;
  canDismiss: boolean;
  canAdjust: boolean;
  autoSell: boolean;
  offerType: "private" | "public";
  loanLink?: string;
  showDanger?: boolean;
  expectedApyFee?: number;
  earnedApyFee?: number;
  onAdjust?: () => void;
  liquidationAlert?: string;
  setLoanAdjustData: any;
};

type Props = {
  trigger: React.ReactElement;
  loanData: any;
  loanType: string;
  setSelectionIndex?: (index: number) => void;
};

const ActiveLoansDialog: React.FC<Props> = ({
  trigger,
  loanType,
  loanData,
}) => {
  const [adjust, setAdjust] = useState(false);
  const [, setLoanAdjustData] = useState(null);
  const setAdjustData = (data) => {
    setLoanAdjustData(data);
  };
  const activeLoanOpts: Opts = {
    loanAmt: "$78,250",
    canDismiss: false,
    canAdjust: true,
    onAdjust: () => setAdjust(true),
    autoSell: true,
    offerType: "private",
    loanLink: "https://www.example.com",
    setLoanAdjustData: setAdjustData,
  };

  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent size="large" className="payback-modal">
        <DialogTitle className="payback-heading">
          Payback Options
        </DialogTitle>
        <Tabs defaultValue={loanType}>
          <TabsContent value="borrower">
            {!adjust ? (
              <>
                <LoanInfoCard
                  loanData={{
                    ...loanData,
                    totalCollateral: loanData?.collateral
                      .map((data) => data["price"])
                      .reduce((partialSum, number) => partialSum + number, 0)
                      .toFixed(2),
                    autoSell: loanData?.loanOfferLender?.autoSell,
                    showPayback: true,
                    ...activeLoanOpts,
                  }}
                />
              </>
            ) : (
              <AdjustContainer>
                <div className="timer"> 
                  <Timer loan={loanData} isInModal isLoanDetails={false}/>
                </div>
                <LoanInfoCard
                  loanData={{
                    ...loanData,
                    canAdjust: false,
                  }}
                  isInModal={true}
                />
                <AdjustActiveLoan setState={setAdjust} loanData={loanData} />
              </AdjustContainer>
            )}
          </TabsContent>
          <TabsContent value="lender">
            <p>Cannot Adjust on Lender</p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ActiveLoansDialog;
