import { Dialog, DialogTrigger, DialogContent } from "./DownloadDialog";
import styled from "styled-components";
import Button from "../../../components/Elements/Button";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { HISTORY_DATA } from "../../../utils/graphQueries/queries";
import Spinner from "components/Spinner";
import { configGraphQL as config } from "config/constants/config";
type Props = {
  trigger: React.ReactElement;
};

const LoanHistoryDialog: React.FC<Props> = ({ trigger }) => {
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState("");
  const [isError, setError] = useState(false);
  const { account, chainId } = useWeb3React();
  const client = useApolloClient();

  useEffect(() => {
    const HistoryData = () => {
      setLoading(true);
      setError(false);
      client
        .query({
          query: HISTORY_DATA,
          fetchPolicy: "network-only",
          variables: { chainId },
        })
        .then((res) => {
          setLoading(false);

          if (res.data) {
            setFilePath(res.data.userLoanOffer);
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    if (account || chainId) {
      HistoryData();
    }
  }, [account, chainId, client]);

  const HandleDownload = () => {
    if (filePath !== "") {
      const link = document.createElement("a");
      link.href = `${config.baseUrl}/download-csv/` + filePath;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("error");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent size="large" style={{ marginTop: 130, marginBottom: 50 }}>
        <p>
          Download the past loan history as borrower and lender for this wallet!
        </p>
        {loading && (account || chainId) ? (
          <LoaderHolder>
            <Spinner />
          </LoaderHolder>
        ) : !isError ? (
          <DownloadBtn onClick={HandleDownload}>Download</DownloadBtn>
        ) : (
          <p>You have'not any loans in your Loan history</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

const DownloadBtn = styled(Button)`
`;

const LoaderHolder = styled.div`
  width: 70px;
  height: 70px;
`;

export default LoanHistoryDialog;
