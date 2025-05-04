import { useApolloClient } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import {
  DASHBOARD_DATA,
  GET_USER_DASHBOARD_TOKENS,
  GET_USER_NFTS,
} from "utils/graphQueries/queries";

import { useLoanData } from "state/hooks";

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

const QualifiedToBorrow = () => {
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
      <QualifiedBorrow>
        <StyledLink>
          <div className="leftPaneText">Qualified to Borrow</div>
          <div data-tip={maxCashOut?.cashOut} className="headerapy green">
            {loading ? (
              <CircularProgress sx={{ color: "#5652bf" }} size={20} />
            ) : (
              `${!data || !account
                ? 0
                : "$" + toCommas(maxCashOut ? maxCashOut?.cashOut : 0)
              }`
            )}
          </div>
        </StyledLink>
      </QualifiedBorrow>
    </>
  );
};

const QualifiedBorrow = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  
  ${({ theme }) => theme.mediaQueries.md}{
    margin-left: 0;
  }
`;

const StyledLink = styled.div`
  margin-left: 30px;
`;

export default QualifiedToBorrow;