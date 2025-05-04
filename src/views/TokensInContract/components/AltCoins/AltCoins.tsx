import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useWeb3React } from "@web3-react/core";
import { CardsWrapper } from 'views/LoanBuilder/components/ChooseCollaterals'
import Spinner from 'components/Spinner'
import AltCoinCard from './AltCoinCard';
import { useContractAddresses } from 'utils/graphQueries/queries';
import useApprovedTokens from 'hooks/useApprovedTokens';


const AltCoins = () => {
    const { chainId, account } = useWeb3React();
    const { result: contractAddresses } = useContractAddresses(chainId?.toString())
    const [approvedTokens, { data, loading }] = useApprovedTokens();
    const [tokens, setTokens] = useState([])
    useEffect(() => {
        if (chainId) {
            approvedTokens({
                variables: {
                    chainId
                },
            });
        } else {
            setTokens([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chainId]);
    useEffect(() => {
        if (data) {
            setTokens(data.ApprovedTokens);
        }
    }, [data])

    return (
        <>

            <Wrapper>
                {
                    !account && <p>Please connect wallet.</p>
                }
                {
                    account && loading && <Spinner />
                }
                {
                    account && !loading && tokens?.length === 0 &&
                    <p>No data found</p>
                }

                {
                    tokens?.map((token, index) => (
                        <CardsWrapper key={index}>
                            <AltCoinCard contract={contractAddresses?.GovWorldDiamond} token={token} />
                        </CardsWrapper>
                    ))
                }
            </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  display:flex;
  flex-wrap: wrap;
  gap:12px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 50px 12px 12px 12px ;
   }
   .address-value{
    display: flex;
    gap:5px;
   }
`;
export default AltCoins