import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useHistory } from "react-router-dom";
import { GET_TOP_LOAN_OFFERS } from "utils/graphQueries/queries";
import { Routes } from "config/constants/routes";
import styled from "styled-components";
import { FireIcon } from "components/Svg";

import useViewport from "hooks/useViewport";
import { useApolloClient } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { NetWorkChainId } from "config/constants/types";
import useSubscriptionCall from "utils/subscriptions/loanSubscription";
import { SubscriptionType } from "config/constants/subscriptions";


export interface Props {
  play?: boolean;
  topOffset?: number;
}

const FeaturesMarquee: React.FC<Props> = ({ play, topOffset }) => {
  const history = useHistory();
  const { account, chainId } = useWeb3React();
  const [toggle, setToggle] = useState(false);
  const { topbarHeight } = useViewport(false, true);
  const client = useApolloClient();
  const [activeLoans, setActiveLoans] = useState<any>(null);
  const [loanOffers, setLoanOffers] = useState<any>(null);
  const { data } = useSubscriptionCall(account);

  useEffect(() => {
    // if (account) {
    client
      .query({
        query: GET_TOP_LOAN_OFFERS,
        variables: { chainId: chainId ? chainId : NetWorkChainId.BSC },
      })
      .then((res) => {
        setActiveLoans(res?.data?.topLoanOffers[0]);
        setLoanOffers(res?.data?.topLoanOffers[1]);
      })
      .catch((err) => {
        console.error(err);
      });
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, data]);

  useEffect(() => {
    if (data) {
      const { loanTransactionListener } = data;

      if (loanTransactionListener?.type === SubscriptionType.CREATE_LOAN || loanTransactionListener?.type === SubscriptionType.LOAN_ACTIVATED) {
        client
          .query({
            query: GET_TOP_LOAN_OFFERS,
            variables: { chainId: chainId ? chainId : NetWorkChainId.BSC },
          })
          .then((res) => {
            setActiveLoans(res?.data?.topLoanOffers[0]);
            setLoanOffers(res?.data?.topLoanOffers[1]);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setTimeout(() => setToggle(!toggle), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper
      play={play}
      direction="left"
      speed={70}
      gradient={false}
      spaceFromTop={topOffset ? topOffset : topbarHeight}
      pauseOnHover={true}
    >
      <Flex>
        <p className="GradientText">
          <FireIcon />
          Loan Offers
        </p>
        <BondValue>
          {loanOffers ? (
            loanOffers?.tokens?.map((token, index: number) => (
              <>
              {index == 0 ? "" : <span className="sep">•</span>}
              <span
                key={index}
                onClick={() =>
                  history.push(`${Routes.DETAILS}/${token?.loanId}`)
                }
              >
                <span className="symbol">{token?.symbol}</span>
                <span className="apy">{token?.apy}%</span>
              </span>
              </>
            ))
          ) : (
            <span>Loading...</span>
          )}
          ...
        </BondValue>
      </Flex>
      <Flex>
        <p className="GradientText">
          <FireIcon />
          Active Loans
        </p>
        <BondValue>
          {activeLoans ? (
            activeLoans?.tokens?.map((token, index: number) => (
              <>
              {index == 0 ? "" : <span className="sep">•</span>}
              <span
                key={index}
                onClick={() =>
                  history.push(`${Routes.DETAILS}/${token?.loanId}`)
                }
              >
                <span className="symbol">{token?.symbol}</span>
                <span className="apy">{token?.apy}%</span>
              </span>
              </>
            ))
          ) : (
            <span>Loading...</span>
          )}
          ...
        </BondValue>
      </Flex>
    </Wrapper>
  );
};


const Wrapper = styled(Marquee) <{ spaceFromTop: number }>`
  height: 52px;
  width: 100%;
  background: linear-gradient(0deg, rgba(182, 15, 249, 0.20) 12.66%, rgba(52, 49, 228, 0.12) 47.62%, rgba(52, 49, 228, 0.00) 86.07%);
  box-shadow: 0px -1px 0px 0px rgba(182, 15, 249, 0.20) inset;
  position: relative;

  &:before, &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(90deg, #070E23 0%, rgba(7, 14, 35, 0.00) 100%);
    width: 52px;
    height: 100%;
  }

  &:after {
    background: linear-gradient(90deg, rgba(7, 14, 35, 0.00) 0%, #070E23 100%);
    left: auto;
    right: 0;
  }

  ${({ theme }) => theme.mediaQueries.md}{
    width: calc(100% + 60px);
    margin: 0 -30px;
  }
`;

const Flex = styled.span<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 5px 20px 0;
  gap: 10px;
  width: max-content;

  .GradientText {
    background: linear-gradient(195deg, #F87C0A 4.37%, #F80A43 32.17%, #FFE500 96.36%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    margin: 0;
    display: flex;
    gap: 5px;

    svg {
      height: 22px;
      width: 22px;
    }
  }
`;

const BondValue = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;

  span {
    margin-right: 8px;
    cursor: pointer;

    &.sep {
      opacity: 0.4;
    }

    &.symbol {
      color: white;
      opacity: 0.6;
      text-decoration: underline;
    }

    &.apy {
      font-size: 0.625rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.green};
      vertical-align: super;
    }

    &:hover{
      text-decoration: none;
    }
  }
`;

export default FeaturesMarquee;
