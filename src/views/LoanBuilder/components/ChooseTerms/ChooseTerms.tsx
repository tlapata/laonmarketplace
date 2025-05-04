import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "assets/images/loanbuilder/terms-bg.svg";
import btn_bg from "assets/images/loanbuilder/small-btn-bg.svg";
import SliderIcon from "components/Svg/Icons/SliderIcon";
import CustomApyIcon from "components/Svg/Icons/CustomApyIcon";
import CompondAveIcon from "components/Svg/Icons/CompoundAveIcon";
import StyledInput from "../common/StyledInput";
import TL from "assets/images/loanbuilder/top-left.svg";
import BR from "assets/images/loanbuilder/bottom-right.svg";
import Frame from "assets/images/loanbuilder/frame.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { GET_STABLE_COINS } from "utils/graphQueries/queries";
import { useApolloClient } from "@apollo/client";
import { StableCoins } from "config/constants/loans";
import { useAppDispatch } from "state";
import { useLoanData } from "state/hooks";
import { ErrorFields, ErrorProps } from "config/constants/errors";
import ApyArena from "../ApyArena";
import { useWeb3React } from "@web3-react/core";

const ChooseTerms = ({ setErr, setCheckError, setMaxLoan, items }) => {
  const { chainId } = useWeb3React();
  const dispatch = useAppDispatch();
  const state = useLoanData();
  const [totalCollateralAmount, setTotalCollateralAmount] = useState(0);
  const [validationObject, setValidationObject] =
    useState<{ event: React.ChangeEvent<HTMLInputElement>; type: ErrorFields }>(
      null
    );
  const [tokens, setToken] = useState<StableCoins[]>([]);
  const {
    apyOffer,
    collateralType,
    collateralData,
    termLengthDays,
    stakedCollateralAmount,
    loanAmountBorrowed,
    loanToValue,
  } = useLoanData();
  const errorObj: ErrorProps = {
    termLength: +termLengthDays > 0 ? false : true,
    borrowAmount: +loanAmountBorrowed > 0 ? false : true,
    customApy: +apyOffer > 0 ? false : true,
  };
  const [errors, setErrors] = useState<ErrorProps>(errorObj);
  const [, setMaxLoanAmount] = useState(0);
  useEffect(() => {
    setErr({ ...errors });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  const [currencyTitle, setCurrencyTitle] = useState<string>("DAI");
  const client = useApolloClient();
  const handleSelect = (e) => {
    setCurrencyTitle(e.symbol);
  };
  const calculateMaxLoanAmount = (value) => {
    const maxAmount = (totalCollateralAmount * loanToValue) / 100;
    setMaxLoanAmount(+maxAmount);
    if (value > maxAmount) {
      setMaxLoan({ valid: false, amount: maxAmount });
      return true;
    }
    setMaxLoan({ valid: true, amount: maxAmount });
    return false;
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      validator(
        validationObject?.event,
        +validationObject?.event.target.value,
        validationObject?.type
      );
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, validationObject]);

  const validator = (event = null, input: any, key) => {
    if (key === ErrorFields.borrowAmount) {
      const maxAmount = calculateMaxLoanAmount(input);

      if (input <= 0) {
        setErrors({
          ...errors,
          borrowAmount: true,
        });
        return true;
      } else if (input > 0) {
        if (maxAmount) {
          setErrors({
            ...errors,
            borrowAmount: true,
          });
          return true;
        } else {
          setErrors({
            ...errors,
            borrowAmount: false,
          });
          return false;
        }
      }
    } else if (key === ErrorFields.termLength) {
      if (input <= 0) {
        setErrors({
          ...errors,
          termLength: true,
        });
        return true;
      } else {
        setErrors({
          ...errors,
          termLength: false,
        });
        return false;
      }
    } else if (key === ErrorFields.apy) {
      if (input <= 0) {
        setErrors({
          ...errors,
          customApy: true,
        });
        return true;
      } else {
        setErrors({
          ...errors,
          customApy: false,
        });
        return false;
      }
    }
  };

  useEffect(() => {
    let totalAmount = [];
    for (let i = 0; i < stakedCollateralAmount.length; i++) {
      if (collateralData[i] !== undefined) {
        totalAmount.push(stakedCollateralAmount[i]);
      }
    }
    const sumAmount = totalAmount.reduce(
      (partialSum, number) => +partialSum + +number,
      0
    );

    setTotalCollateralAmount(sumAmount);
    const maxAmount = (sumAmount * loanToValue) / 100;
    setMaxLoanAmount(+maxAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanToValue]);

  useEffect(() => {
    const getStableCoins = () => {
      client
        .query({
          query: GET_STABLE_COINS,
          variables: { loanType: collateralType, chainId },
        })
        .then((result) => {
          setToken(result.data.stableCoinAndTopApy.stableCoin);
        })
        .catch((err) => {});
    };
    getStableCoins();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <div className="card bg-transparent text-white border-0">
          <img className="card-img" src={bg} alt="Card " />
          <div className="card-img-overlay active">
            <Form style={{ alignItems: "flex-start" }}>
              <FormGroup>
                <div className="label">Collateral Amt</div>
                <StyledButton style={{ width: "auto", alignSelf: "center" }}>
                  <img className="collateralimage" src={btn_bg} alt="" />
                  <p className="collateralamount">
                    {" "}
                    ${totalCollateralAmount?.toFixed(2)}{" "}
                  </p>
                </StyledButton>
              </FormGroup>
              <FormGroup>
                <div className="label">Borrow Amt</div>
                <StyledInput
                  type="number"
                  value={loanAmountBorrowed}
                  onChange={(e) => {
                    setValidationObject({
                      event: e,
                      type: ErrorFields.borrowAmount,
                    });
                  }}
                ></StyledInput>
              </FormGroup>
              <FormGroup>
                <div className="label">Term Length</div>
                <StyledInput
                  type="number"
                  value={termLengthDays}
                  onChange={async (e) => {
                    setValidationObject({
                      event: e,
                      type: ErrorFields.termLength,
                    });
                  }}
                ></StyledInput>
              </FormGroup>
              <FormGroup>
                <div className="label">Stable Coin</div>

                <DropdownWrapper>
                  <DropdownButton title={currencyTitle}>
                    {tokens.length > 0 &&
                      tokens.map((data) => (
                        <Dropdown.Item
                          onSelect={() => handleSelect(data)}
                          eventKey={data.symbol}
                        >
                          {data.symbol}
                        </Dropdown.Item>
                      ))}
                  </DropdownButton>
                </DropdownWrapper>
              </FormGroup>
            </Form>
            <div className="svg-container">
              <SliderIcon
                id="#1"
                apy1="25"
                text2="Ave"
                apy2="56"
                width={"100%"}
                style={{ padding: "0px 3px 0px 8px" }}
              />
            </div>

            <div className="card-title" style={{ marginBottom: "-30px" }}>
              My Custom APY
            </div>
            <div className="apy-wrapper">
              <div className="custom-apy ">
                <div className="inputwrapper">
                  <input
                    type="number"
                    className="hid-input"
                    value={apyOffer}
                    onChange={(e) => {
                      setValidationObject({ event: e, type: ErrorFields.apy });
                    }}
                  />
                </div>
                <CustomApyIcon
                  apy1="10"
                  apy2="10"
                  customApy={apyOffer}
                  text1="Least Chance"
                  text2="Best Chance"
                  width={"100%"}
                />
              </div>
            </div>
            <div className="r">
              <CompondAveIcon
                style={{ paddingLeft: "1px" }}
                apy1="2"
                apy2="33"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </Card>
      <ApyArena setMaxLoan={setMaxLoan} setErr={setErrors} />
    </>
  );
};

const Card = styled.div`

cursor:pointer;
margin:19px 10px;

.card-title{  
    justify-content:center;
    font-family: Organetto Semi Bold;
    font-style: normal;
    font-weight: 800;
    font-size: 14.504px;
    line-height: 120%;
    
    text-align: center;
    
    color: #FFFFFF

  }
  @media(max-width:1280px){
    .card-title{
      font-size: 10px !important;
      margin-bottom: -20px !important;
    }
   }
  .card-img-overlay{
    margin-bottom:33px;
    padding: 1rem 0;
    .custom-apy {
      position:relative;
      .inputwrapper{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        right: 0;
        left: 0;
      }
      .hid-input{
        margin: auto;
        background:none;
        height: 30px;
        border:none;
        outline:0;
        color:transparent;
        text-align:center;
        caret-color: white;
        word-wrap: break-word;
        width:100px;

        
        font-family: Jost Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 14.504px;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type=number] {
        -moz-appearance: textfield;
      }
           



      }
    }
    .svg-container{
      margin-top:35px;
    }

    .apy-wrapper{
      width: 90%;
      margin: auto;
    }


  }
  
}
`;
const DropdownWrapper = styled.div`
  .dropdown-toggle {
    all: unset;
    background-image: url(${TL}), url(${BR}), url(${Frame});
    background-position: top left, bottom right, center;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-color: transparent !important;
    background-size: auto, auto, 94% 77%;
    background-origin: padding-box, padding-box, padding-box;
    padding: 10px;
    border-radius: 0.38889px;
    border: none !important;
    box-shadow: none !important;
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 14.504px;
    text-align: center;
    color: #ffffff;
    display: inline-block;
    width: 100%;
  }
  .dropdown-menu {
    background: linear-gradient(
      90deg,
      rgba(241, 198, 255, 0.35) -16.66%,
      rgba(189, 10, 248, 0.35) 24.05%,
      rgba(54, 92, 252, 0.35) 99.31%
    );
  }
  .dropdown-menu.show {
    transform: translate(5px, 42px) !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 105%;
  }
  .dropdown-item {
    font-weight: bold;
    text-align: center;
  }

  @media(max-width:1280px){
    .dropdown-toggle{
      display: flex;
      height: 13px;
      justify-content: center;
      align-items: center;
    }
  }
}
`;

const StyledButton = styled.div`
  min-height: 100%;
  text-transform: capitalize;
  width: 100%;
  position: relative;
  background: none;

  p {
    position: absolute;
    top: 30%;
    width: 100%;
    text-align: center;
    background: transparent;
    @media (max-width: 1280px) {
      top: 21%;
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px;
  @media (max-width: 1280px) {
    gap: 20px;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  .label {
    font-family: Organetto Semi Bold;
    font-style: normal;
    font-weight: 800;
    font-size: 14.504px;
    text-transform: uppercase;

    text-align: center;

    color: #ffffff;
    @media (max-width: 1280px) {
      font-size: 9px !important;
    }
  }
`;

export default ChooseTerms;
