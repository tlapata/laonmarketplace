import LoanCard from "./LoanCard";
import styled from "styled-components";
import Spinner from "components/Spinner";
import type { ApolloError } from "@apollo/client";
import type { LoanOffer } from "../api/getLoanOffers";
import { useEffect, useState } from "react";
import { setActiveLoan, setAutoSell } from "../loansSlice";
import { useAppDispatch } from "state";
import { useWeb3React } from "@web3-react/core";
type ViewProps = {
  loading: boolean;
  data: LoanOffer[];
  error?: ApolloError;
  isActiveLoan: boolean;
};

const LoanGridView: React.FC<ViewProps> = ({
  loading,
  data,
  isActiveLoan,
}) => {
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    const mappedData =
      data &&
      data.map((res) => {
        return {
          ...res,
          autoSell: false,
        };
      });
    setLoanData(mappedData);
  }, [data]);

  if (!account) {
    return <Wrapper>Please Connect Your Wallet</Wrapper>;
  }

  if (loading || !data) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  if (data.length === 0) {
    return <Wrapper>No Data Found</Wrapper>;
  }
  const setCustomAutoSell = (id, value) => {
    let newData = loanData;
    let editedData = newData.map((result) => {
      return {
        ...result,
        autoSell: result.id === id ? value : false,
      };
    });
    dispatch(setAutoSell({ id, autoSell: value }));
    dispatch(setActiveLoan(editedData.find((data) => data.id === id).autoSell));
    setLoanData(editedData);
  };

  return (
    <LoanCardsContainer>
      {loanData &&
        loanData?.map((loan) => {
          return (
            <LoanCard
              key={loan?.id}
              setAutoSell={setCustomAutoSell}
              loanData={loan}
              isActiveLoan={isActiveLoan}
            />
          );
        })}
    </LoanCardsContainer>
  );
};

const LoanCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(211px, 1fr));
  gap: 20px;
  ${({ theme }) => theme.mediaQueries.md}{
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.xs}{
    grid-template-columns: repeat(auto-fill, minmax(211px, 1fr));
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 9999;
  min-height: 50vh;
`;

export default LoanGridView;
