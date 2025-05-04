import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useWeb3React } from "@web3-react/core";
import { CardsWrapper } from 'views/LoanBuilder/components/ChooseCollaterals'
import Spinner from 'components/Spinner'
import { useContractAddresses } from 'utils/graphQueries/queries';
import { Card, Key, Value } from 'views/LoanBuilder/components/ChooseCollaterals'
import useWeb3 from 'hooks/useWeb3';
import { ITierLevel, getTierLevels } from 'utils/contracts/contractCalls';
import useGovTokenPrice from 'hooks/useGovTokenPrice';
import { Switch, SwitchThumb } from 'components/Form/Switch';
import CardBG from "assets/images/stats-select-card.svg";
import HoverBG from "assets/images/stats/card-selected.svg";
import { GOV_TOKEN_ADDRESS } from 'config/constants/addresses';

const AltCoins = () => {
    const web3 = useWeb3();
    const [tiers, setTiers] = useState<ITierLevel[]>([])
    const { chainId, account } = useWeb3React();
    const { result: contractAddresses } = useContractAddresses(chainId?.toString())
    const [govPrice, { data: govPriceAmt, loading }] = useGovTokenPrice();
    useEffect(() => {
        if (chainId && contractAddresses) {
            govPrice({
                variables: {
                    tokenAddress: GOV_TOKEN_ADDRESS,
                    chainId
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chainId]);
    useEffect(() => {
        const getFee = async () => {
            const res = await getTierLevels(contractAddresses?.GovWorldDiamond, web3);
            setTiers(res)
            console.log(res)
        }
        if (chainId) {
            getFee()

        }
    }, [contractAddresses?.GovWorldDiamond, chainId, web3])
    useEffect(() => {
        const a = ((govPriceAmt?.singleToken?.price || 0) * 10000).toLocaleString(
            "en-US",
            { minimumFractionDigits: 0, maximumFractionDigits: 0 }
        )
    }, [govPriceAmt])

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
                    account && !loading && tiers?.length === 0 &&
                    <p>No data found</p>
                }

                {
                    tiers?.map((tier: ITierLevel, index) => (
                        <CardsWrapper key={index}>
                            <TierCard>
                                <div className="card bg-transparent text-white border-0">
                                    <div className="card-img-overlay active">
                                        <div>
                                            <div style={{ textAlign: "left" }} className="d-flex align-items-center gap-2 mb-2">
                                                <Marker className={tier?.tierLevelAscii?.toLowerCase()} />
                                                <p className="mb-0">{tier?.tierLevelAscii}</p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>Gov Holdings:</Key>
                                                <Value>{tier?.govHoldings}</Value>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <Key>USD Value:</Key>
                                                <Value className='address-value'>
                                                    $
                                                    {((govPriceAmt?.singleToken?.price || 0) * tier.govHoldings).toLocaleString(
                                                        "en-US",
                                                        { minimumFractionDigits: 0, maximumFractionDigits: 0 }
                                                    )}
                                                </Value>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>LTV</Key>

                                                <Value>{tier.loantoValue}%</Value>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>Single Token</Key>

                                                <Value>
                                                    <Switch
                                                        checked={tier.singleToken}
                                                        disabled={true}
                                                        width={40}
                                                        height={20}
                                                    >
                                                        <SwitchThumb size={20} translatex={19} />
                                                    </Switch>
                                                </Value>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>Single NFT</Key>

                                                <Value>
                                                    <Switch
                                                        checked={tier.singleNFT}
                                                        disabled={true}
                                                        width={40}
                                                        height={20}
                                                    >
                                                        <SwitchThumb size={20} translatex={19} />
                                                    </Switch></Value>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>Multi Token</Key>

                                                <Value>
                                                    <Switch
                                                        checked={tier.multiToken}
                                                        disabled={true}
                                                        width={40}
                                                        height={20}
                                                    >
                                                        <SwitchThumb size={20} translatex={19} />
                                                    </Switch>
                                                </Value>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <Key>Multi NFT</Key>

                                                <Value>   <Switch
                                                    checked={tier.multiNFT}
                                                    disabled={true}
                                                    width={40}
                                                    height={20}
                                                >
                                                    <SwitchThumb size={20} translatex={19} />
                                                </Switch></Value>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </TierCard>
                        </CardsWrapper>
                    ))
                }
            </Wrapper>
        </>
    )
}

const TierCard = styled(Card)`
    display: block;
    
    .card {
        height: 365px;

        :hover {
            color: white;

            .title {
                -webkit-background-clip: text;
                -webkit-text-fill-color: white;
                background-clip: text;
                text-fill-color: white;
            }
        }
    }
`
const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  display:flex;
  flex-wrap: wrap;
  gap:14px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 50px 12px 12px 12px ;
   }
   .address-value{
    display: flex;
    gap:5px;
   }
`;
const Marker = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.35);
  &.bronze {
    background: linear-gradient(
      180deg,
      #edb966 0.5%,
      #dddcd7 22.92%,
      #e9b87d 38.98%,
      #853a27 65.32%,
      #d3954c 99.58%
    );
  }
  &.silver {
    background: linear-gradient(
      180deg,
      #efefef 0.5%,
      #dddcd7 22.92%,
      #e8e8e8 38.98%,
      #858585 65.32%,
      #b3b3b3 99.58%
    );
  }
  &.gold {
    background: linear-gradient(
      180deg,
      #f7e547 8.13%,
      #fefcaf 20.67%,
      #f8dc20 34.76%,
      #e67a0b 52.27%,
      #f8dc20 87.97%
    );
  }
  &.platinum {
    background: linear-gradient(
      180deg,
      #66edac 0.5%,
      #d7dddb 22.92%,
      #7de9c2 38.98%,
      #27857a 61.4%,
      #4cd3cb 99.58%
    );
  }
  &.rhodium {
    background: linear-gradient(180deg, rgba(207,186,186,1) 5%, rgba(245,227,227,1) 33%, rgba(201,175,175,1) 60%);
  }
  &.allstar {
    background: linear-gradient(
      180deg,
      #f1c6ff 0.5%,
      #ca64ff 22.92%,
      #f1c6ff 38.98%,
      #524bfb 65.32%,
      #ab15f9 90.81%
    );
   
  }
  &.elite{
    background:linear-gradient(180deg, #ADD8E6 0.5%, #87CEEB 22.92%, #6495ED 38.98%, #4169E1 61.4%, #1E90FF 99.58%);
}
`;
export default AltCoins