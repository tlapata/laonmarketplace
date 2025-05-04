import { useApolloClient } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SectionTitle from "views/SectionTitle";
import { DashboardPanel, HeadingBanner, PanelHolder, PanelTitle, TitleHolder, TokenVal } from "./Dashboard.styled";
import TokensTable from "./components/TokensTable";
import CircularProgress from "@mui/material/CircularProgress";
import { NextIcon } from "components/Svg";
import { Routes } from "config/constants/routes";
import { useHistory } from "react-router-dom";

import {
  DASHBOARD_DATA,
  GET_USER_DASHBOARD_TOKENS,
  GET_USER_NFTS,
} from "utils/graphQueries/queries";
import ReactTooltip from "react-tooltip";
import NftsTable from "./components/NftsTable";
import { useLoanData } from "state/hooks";
import Overlay from "../../components/Overlay";
import { toCommas } from "utils/conversion";
import { TierLevelEnum } from "config/constants/types";

import { Popup_Content } from "config/constants/infoData";
import { contentDescription, contentTitle } from "views/SectionTitle/Content";

interface Portfolio {
  userDashboard: {
    maxCashOut: {
      cashOut: number;
      tierLevel: string;
      tierType: string;
    }[];
    loanOffers: any;
  };
}
const initialData = {
  userDashboard: {
    maxCashOut: [],
    loanOffers: null,
  },
};

const Dashboard = () => {
  const history = useHistory();
  const { chainId, account } = useWeb3React();
  const client = useApolloClient();
  const [loading, setLoaing] = useState(false);
  const { loanState } = useLoanData();
  const tier = loanState.tier;
  const DashBoardData = () => {
    setLoaing(true);
    client
      .query<Portfolio>({
        query: DASHBOARD_DATA,
        fetchPolicy: "network-only",
        variables: { chainId },
      })
      .then((res) => {
        setLoaing(false);
        setUserData(res.data);
      })
      .catch(() => {
        setLoaing(false);
      });
  };
  const [data, setUserData] = useState(initialData);
  const [tokensLoading, setTokensLoading] = useState(false);
  const [NFTsLoading, setNFTsLoading] = useState(false);
  const [nftData, setNftData] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [totalTokensValue, setTotalTokensValue] = useState(0);
  const [totalNftValue, setTotalNftValue] = useState(0);

  useEffect(() => {
    if (account) {
      // const timeInterval = async () => {
      const secret = localStorage.getItem("callSecret");
      if (secret) {
        // clearInterval(execInterval);
        DashBoardData();
        getUserNfts(`0x${chainId}`, account, tier?.tierType);
        getUserTokens(`0x${chainId}`, account, tier?.tierType);
        // return () => clearInterval(execInterval);

      }
      // };
      // let execInterval = setInterval(timeInterval, 1000);
    } else {
      setUserData(data);
      setTokens([]);
      setNftData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId, tier]);

  useEffect(() => {
    if (tokens && tokens.length > 0) {
      const data = tokens
        .map((e) => e.price)
        .reduce((a, b) => {
          return a + b;
        }, 0);
      setTotalTokensValue(data);
    } else {
      setTotalTokensValue(0)
    }
    if (nftData && nftData.length > 0) {
      const data = nftData
        .map((e) => e.price)
        .reduce((a, b) => {
          return a + b;
        }, 0);
      setTotalNftValue(data);
    } else {
      setTotalNftValue(0)
    }
  }, [tokens, nftData, chainId, account]);


  const getUserNfts = (chainId: string, account: string, tierType: string) => {
    setNFTsLoading(true);
    client
      .query({
        query: GET_USER_NFTS,
        variables: { chainId, account, tierType },
      })
      .then((result) => {
        const data = result.data.listUserNFTTokens.map((data, index) => {
          return { ...data, active: false };
        });
        setNftData(data);
        setNFTsLoading(false);
      })
      .catch(() => {
        setNFTsLoading(false);
      });
  };

  const getUserTokens = (chainId: string, account: string, tierType: string) => {
    setTokensLoading(true);
    client
      .query({
        query: GET_USER_DASHBOARD_TOKENS,
        variables: { chainId, account, tierType },
      })
      .then((result) => {
        setTokens(result.data.userTokensBalance);
        setTokensLoading(false);
      })
      .catch(() => {
        setTokensLoading(false);
      });
  };
  const maxCashOut = data?.userDashboard.maxCashOut.find(
    (i) => i.tierType === loanState?.tier.tierType
  );


  return (
    <>
      <Overlay />
      <Container>
        <ReactTooltip />

        <SectionTitle 
          title="Dashboard" 
          headtitle={contentTitle[Popup_Content.DASHBOARD]} 
          dialogtitle={contentTitle[Popup_Content.DASHBOARD]} 
          content={contentDescription[Popup_Content.DASHBOARD]} 
        />

        <PanelHolder className="panelData">
          <DashboardPanel>
            <TitleHolder>
              <PanelTitle>
                <>Token</> Value:
              </PanelTitle>
              <TokenVal data-tip={totalTokensValue}>
                  ${toCommas(totalTokensValue)}
              </TokenVal>
            </TitleHolder>
            <TokensTable loading={tokensLoading} data={tokens} />
          </DashboardPanel>
          <DashboardPanel>
            <TitleHolder>
              <PanelTitle>
                <>NFT</> Value:
              </PanelTitle>
              <TokenVal>${toCommas(totalNftValue)}</TokenVal>
            </TitleHolder>
            <NftsTable loading={NFTsLoading} data={nftData} />
          </DashboardPanel>
          <div className="my-stats">
            <TitleHolder>
              <PanelTitle>
                <>My Stats:</>
                <h5 className="summary">summary</h5>
              </PanelTitle>
              <TokenVal><a onClick={() => history.push(Routes.MYSTATS)}><NextIcon /></a></TokenVal>
            </TitleHolder>
            <div className="lender-borrower">
              <h5>As lender</h5>
              <div className="stats">
                <div>
                  <label className="default">Loaned:</label>
                  <span>$0</span>
                </div>
                <div>
                  <label className="default">APY%:</label>
                  <span className="green">0%</span>
                </div>
              </div>
              <div className="stats">
                <div>
                  <label className="default">Total Days:</label>
                  <span>0</span>
                </div>
                <div>
                  <label className="default">Earned:</label>
                  <span className="green">$0</span>
                </div>
              </div>
              <div className="stats">
                <div>
                  <label className="default">Active Loans:</label>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="lender-borrower">
              <h5>As borrower</h5>
              <div className="stats">
                <div>
                  <label className="default">Borrowed:</label>
                  <span>$0</span>
                </div>
                <div>
                  <label className="default">APY%:</label>
                  <span className="red">0%</span>
                </div>
              </div>
              <div className="stats">
                <div>
                  <label className="default">Total Term:</label>
                  <span>0</span>
                </div>
                <div>
                  <label className="default">Paid:</label>
                  <span className="red">$0</span>
                </div>
              </div>
              <div className="stats">
                <div>
                  <label className="default">Active Offers:</label>
                  <span>0</span>
                </div>
                <div>
                  <label className="default">Active Loans:</label>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </PanelHolder>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  
  .qualified {
    padding: 30px;
    ${({ theme }) => theme.mediaQueries.md}{
       padding:12px;
    }
  }
`;

const QualifiedBorrow = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  
  ${({ theme }) => theme.mediaQueries.md}{
    margin-left: 0;
    width: 100%;
  }
  
  .title {
    font-size: 2.25rem;
    font-weight: 500;
    margin-right: 30px;
  }

  .value {
    font-weight: 500;
  }
`;

const TierText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;

  .None {
    color: white;
  }
  
  .Allstar {
    background: linear-gradient(0deg, #90ffd2, #90ffd2),
      linear-gradient(90deg, #f1c6ff -3.79%, #e084ff 44.81%, #8da3ff 64.43%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Platinum , .Rhodium{
    background: linear-gradient(
      90deg,
      rgb(234, 250, 253) 0%,
      rgb(88, 228, 220) 26.93%,
      rgb(208, 246, 255) 69.03%,
      rgb(88, 228, 220) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Silver {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(153, 153, 153) 26.93%,
      rgb(255, 255, 255) 69.03%,
      rgb(126, 126, 126) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Bronze {
    background: linear-gradient(
      90deg,
      rgb(255, 236, 215) 0%,
      rgb(149, 108, 59) 26.93%,
      rgb(255, 240, 222) 69.03%,
      rgb(194, 144, 86) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Gold {
    background-image: linear-gradient(
      90deg,
      #ffefc6 0%,
      #ffce20 26.93%,
      #ffefc6 69.03%,
      #ffce20 99.41%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size:20px;
  }
`;

export default Dashboard;