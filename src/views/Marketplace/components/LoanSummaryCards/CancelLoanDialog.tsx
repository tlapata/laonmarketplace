import { Dialog, DialogContent, DialogTitle } from "components/Dialog";
import CancelBg from "assets/images/cancelDialog.png";
import Button from "components/Elements/Button";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { useLazyQuery } from "@apollo/client";
import { CANCEL_LOAN_OFFER } from "utils/graphQueries/queries";
import { useEffect, useState } from "react";
import useWeb3 from "hooks/useWeb3";
import Spinner from "components/Spinner";
import { LoanTxMsgs } from "config/constants/loans";
import { useModal } from "state/hooks";
import { revertReason } from "utils/revertReason";
import { getMessageFrom } from "utils/conversion";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  loanId: number;
};

const CancelLoanDialog: React.FC<Props> = ({ loanId, open, setOpen }) => {
  const { setAlert } = useModal();
  const context = useWeb3React();
  const { chainId, account } = context;
  const [cancelLoan, { data, error, loading }] =
    useLazyQuery(CANCEL_LOAN_OFFER);
  const [cancelLoader, setCancelLoader] = useState(false);
  const web3 = useWeb3();
  // const showToast = (message: string, type = "successToast") =>
  //   toast(message, {
  //     className: type !== "error" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  const showToast = (message: string, type = "success") => {
    setAlert(message,true, type);
  };
  useEffect(() => {
    if (error) {
      setCancelLoader(false);
      return;
    }
    if (data && !loading) {
      const cancelTransaction = async () => {
        let params = {
          data: data?.cancelLoanOfferSendTransction?.targetData,
          from: account,
          to: data?.cancelLoanOfferSendTransction?.ContractAddress,
        };
        await web3.eth
          .sendTransaction(params)
          .then(async () => {
            setCancelLoader(false);
            showToast(LoanTxMsgs.CANCEL_SUCCESS, "success");
            setOpen(false);
          })
          .catch((err) => {
            const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
            setCancelLoader(false);
          });
      };
      cancelTransaction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, loading]);
  const cancelLoanHandler = () => {
    setCancelLoader(true);
    cancelLoan({
      variables: {
        cancelLoanOffer: {
          loanId: loanId,
          chain: `${chainId}`,
        },
      },
    });
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        size="small"
      >
        <DialogTitle>
          Do you want to cancel your loan offer?
        </DialogTitle>
        <ButtonGroup>
          {cancelLoader ? (
            <StyledSpinner />
          ) : (
            <>
              <Button
                className="cancel-btn"
                disabled={loading}
                onClick={() => setOpen(false)}
              >
                No
              </Button>
              <Button
                className="cancel-btn"
                onClick={cancelLoanHandler}
                disabled={loading}
              >
                {loading ? "Cancelling..." : "Yes"}
              </Button>
            </>
          )}
        </ButtonGroup>
      </DialogContent>
    </Dialog>
  );
};

const StyledSpinner = styled(Spinner)`
  width: 25px;
  height: 25px;
  margin: 0 15% !important;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 30px;
  .cancel-btn {
    min-width: 130px;
    margin: 0 20px;
  }
`;
export default CancelLoanDialog;
