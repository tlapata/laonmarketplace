import React from "react";
import ReactTooltip from "react-tooltip";
import { ApyContainer, ApyArenaCard, ApyArenaCenterBox, FormGroup, } from "./ApyArena.styles";
import TokenRedIconSvg from "./Svg/TokenRedIconSvg";
import TokenYellowIconSvg from "./Svg/TokenYellowIconSvg";
import TokenGreenIconSvg from "./Svg/TokenGreenIconSvg";
import NFTRedIconSvg from "./Svg/NFTRedIconSvg";
import NFTYellowIconSvg from "./Svg/NFTYellowIconSvg";
import NFTGreenIconSvg from "./Svg/NFTGreenIconSvg";
import  { ApyStyledInput } from "../common/StyledInput";
import { CurrencyBtn, CustomDropDown } from "../SummaryCalculator/Calculator.styled";


import ApyArenaSvg from "./ApyArenaSvg";
import { useLoanData, useSetLoanState } from "state/hooks";
import { useEffect, useRef, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_STABLE_COINS, useApyPercent } from "utils/graphQueries/queries";
import { ErrorProps } from "config/constants/errors";
import { useForm, Controller } from "react-hook-form";
import { useWeb3React } from "@web3-react/core";
import useViewport from "hooks/useViewport";
import ApyArenaSvgResponsive from "./ApyArenaSvgResponsive";
import { useSelector } from "react-redux";
import { RootState } from "state"
import DropDownIcon from "assets/images/loanbuilder/drop-down.svg";


export enum LoanType {
  ALL_LOAN_TYPES = 'ALL_LOAN_TYPES',
  SINGLE_TOKEN = 'SINGLE_TOKEN',
  MULTI_TOKEN = 'MULTI_TOKEN',
}

const ApyArena = ({ setErr }: any) => {
  const { chainId } = useWeb3React();
  const { width } = useViewport();
  const { loanState } = useLoanData();
  const [loanTitle, setLoanTitle] = useState<string>("");
  const [loanType,setLoanType]=useState<LoanType | null>(null);
  const [getApyPercent ,{data}] = useApyPercent(chainId, loanType);
  useEffect(() => {
    getApyPercent({
      variables: {
        chainId: chainId,
        loanType: loanType ||undefined,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanType, chainId]);  

  const { apyOffer } =
    loanState;
  const errorsObj: ErrorProps = {
    termLength: false,
    borrowAmount: false,
    customApy: +apyOffer > 0 ? false : true,
  };
  const sidebarOpen = useSelector(
    (state: RootState) => state.loanBuilder.drawer
  );
  const client = useApolloClient();
  const [errors, setErrors] = useState<ErrorProps>(errorsObj);
  const { watch, control } = useForm();
  const { setLoanBuilderState } = useSetLoanState();
  const [showDropDown, setShowDropDown] = React.useState(false);

  // const [selectedToken, setSelectedToken] = useState<TokenTypes | null>(null);

  const handleTokenChange = (token: LoanType) => {
    if (token === LoanType.ALL_LOAN_TYPES) {
      setLoanType(undefined); 
    } else {
      setLoanType(token); 
    }
    setLoanTitle(token);
   
    setShowDropDown(showDropDown);
  };
  
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setShowDropDown(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  useEffect(() => {
    setErr({ ...errors });
  }, [errors, setErr]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.apyOffer <= 0) {
        setErrors({
          ...errors,
          customApy: true,
        });
      } else if (value.apyOffer > 0) {
        setErrors({
          ...errors,
          customApy: false,
        });

        setLoanBuilderState({
          ...loanState,
          apyOffer: value.apyOffer,
        });
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, loanState]);

  useEffect(() => {
    //get user LTV
    const getStableCoins = () => {
      client
        .query({
          query: GET_STABLE_COINS,
          variables: { loanType: loanState.tier.tierType, chainId },
        })
        .then(({ data }) => {
          let avgApy = data.stableCoinAndTopApy?.avgApy
            .toFixed(2)
            .substring(0, 4);
          let topApy = data.stableCoinAndTopApy?.topApy
            .toFixed(2)
            .substring(0, 4);
          if (avgApy.endsWith(".")) {
            avgApy = avgApy.slice(0, -1);
          }
          if (topApy.endsWith(".")) {
            topApy = topApy.slice(0, -1);
          }
          setLoanBuilderState({
            ...loanState,
            loanToValue: data.stableCoinAndTopApy.loantoValue,
            stableCoinID: data.stableCoinAndTopApy.stableCoin[0]?.id,
            stableCoinAddress:
              data.stableCoinAndTopApy.stableCoin[0]?.tokenAddress,
            stableCoins: data.stableCoinAndTopApy.stableCoin,
          });
        })
        .catch((err) => { });
    };
    getStableCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanState.tier.tierType]);


  return (
    <ApyContainer>
      <ReactTooltip />
      <ApyArenaCard>
      <ApyArenaCenterBox>
          <div className="dropdown-title">Competitors</div>
          <div className="input-wrapper">
            <div className="input-block">
              <Controller
                name="apyOffer"
                defaultValue={apyOffer}
                control={control}
                render={({ field }) => (
                  <>
                    <div className="input-label">
                      <p>My Best APY Offer %</p>
                      <ApyStyledInput
                        value={field.value || ""}
                        onChange={(e) => {
                          // remove the extra char
                          const sanitizedValue = e.target.value.replace("%", "");
                          field.onChange(+sanitizedValue || 0);
                        }}
                        placeholder="0"
                      />
                    </div>
                    <FormGroup className="dropdown">
                      <CurrencyBtn 
                        ref={ref}
                        onClick={() => setShowDropDown(true)}
                        className="dropdownitems loan-type"
                      >
                        {((loanType? ((loanTitle === "SINGLE_TOKEN") ? "Single Token / NFT" : "Multi Token / NFT ") : "All Loan Types"))}
                      </CurrencyBtn>
                      {showDropDown && (
                        <CustomDropDown className="loan-dropdown" sidebarOpen={sidebarOpen}>
                          {Object.values(LoanType).map((token, index) => (
                            <div key={index} className={`dropdownitems`} onClick={() => handleTokenChange(token)}>
                              {token === LoanType.SINGLE_TOKEN ? "Single Token / NFT" :
                              token === LoanType.MULTI_TOKEN ? "Multi Token / NFT" : "All Loan Types"}
                            </div>
                          ))}
                        </CustomDropDown>
                      )}
                    </FormGroup>
                  </>
                )}
              />
            </div>
          </div>
      </ApyArenaCenterBox>
      <div className="sideinfo">
        <div className="svg-title">Token Backed Loans</div>
        <div>
          <TokenGreenIconSvg apy={Math.round(data?.apy?.token?.bestApy) || 0} />
          <div className="middle-svg">
            <TokenYellowIconSvg apy={Math.round(data?.apy?.token?.top10AvgApy) || 0} />
          </div>
          <TokenRedIconSvg apy={Math.round(data?.apy?.token?.top25Apy) || 0} />
        </div>
      </div>
      <div className="sideinfo nft">
        <div className="svg-title">NFT Backed Loans</div>
        <NFTGreenIconSvg apy={Math.round(data?.apy?.nft?.bestApy) || 0} />
        <div className="middle-svg">
          <NFTYellowIconSvg apy={Math.round(data?.apy?.nft?.top10AvgApy) || 0} />
        </div>
        <NFTRedIconSvg apy={Math.round(data?.apy?.nft?.top25Apy) || 0} />
      </div>

          {/* illustration as svg, box numbers are from top to bottom }
          {
            width > 768 ? <ApyArenaSvg
              box1={Math.round(data?.apy?.token?.top25Apy) || 0}
              box2={Math.round(data?.apy?.token?.top10AvgApy) || 0}
              box3={Math.round(data?.apy?.token?.bestApy) || 0}
              box4={Math.round(data?.apy?.nft?.bestApy) || 0}
              box5={Math.round(data?.apy?.nft?.top25Apy) || 0}
              box6={Math.round(data?.apy?.nft?.top10AvgApy) || 0}
            /> : <ApyArenaSvgResponsive
              box1={Math.round(data?.apy?.token?.top25Apy) || 0}
              box2={Math.round(data?.apy?.token?.top10AvgApy) || 0}
              box3={Math.round(data?.apy?.token?.bestApy) || 0}
              box4={Math.round(data?.apy?.nft?.bestApy) || 0}
              box5={Math.round(data?.apy?.nft?.top25Apy) || 0}
              box6={Math.round(data?.apy?.nft?.top10AvgApy) || 0}
            />
          */}

      </ApyArenaCard>    
    </ApyContainer>
  );
};

export default ApyArena;
