import { LoanTypes, TokenTypes } from "config/constants/loans";
import { useRef, useState } from "react";
import { useLoanData, useSetLoanState } from "state/hooks";
import { Card, CardsWrapper } from "components/shared/styled";
import selectedTick from "assets/images/icons/choosen.svg";

import card_bg from "assets/images/loanbuilder/cards-bg.svg";
import card_bg_blue from "assets/images/loanbuilder/card_bg_blue.svg";

const collateralTypes = [
  {
    name: LoanTypes.SINGLE_TOKEN,
    type: TokenTypes.SINGLE_TOKEN,
    identifier: "singleToken",
    active: false,
    id: 0,
  },
  {
    name: LoanTypes.SINGLE_NFT,
    identifier: "singleNft",
    type: TokenTypes.SINGLE_NFT,
    active: false,
    id: 1,
  },
  {
    name: LoanTypes.MULTI_TOKEN,
    identifier: "multiToken",
    type: TokenTypes.MULTI_TOKEN,
    active: false,
    id: 2,
  },
  {
    name: LoanTypes.MULTI_NFT,
    type: TokenTypes.MULTI_NFT,
    identifier: "multiNft",
    active: false,
    id: 3,
  },
  // {
  //   name: "Network Token",
  //   type: TokenTypes.NETWORK_TOKEN,
  //   identifier: "networkToken",
  //   active: false,
  //   id: 4,
  // },
];

const ChooseCollateralType = ({
  type,
  setSelected,
  setReset,
  toggleClassName,
  setCurrent,
}) => {
  const { setLoanBuilderState } = useSetLoanState();
  const img = useRef();
  const [imageLoading, setImageLoading] = useState(false);
  const { loanState } = useLoanData();

  const handleClick = (id) => {
    setCurrent(id);
    type(collateralTypes[id].type);
    setLoanBuilderState({
      ...loanState,
      collateralType: collateralTypes[id].type,
    });

    setSelected(true);
    setReset(true);
    toggleClassName();
  };

  const imageLoaded = () => {
    const img1: any = img.current;
    if (img1 && img1.complete) {
      setImageLoading(true);
    }
  };
  
  return (
    <CardsWrapper className="card-wrapper">
      {collateralTypes.map((cType, index) => (
        <Card className={cType.type === loanState.collateralType && ("choosen")}
          key={index}
          onClick={() => handleClick(cType.id)}
        >
          <div className="card">
            {/*<p className="card-number">0{index+1}</p>*/}
            <div className="inner-card">
                {/*<div className="tick-img">
                  {cType.type === loanState.collateralType && (
                    <img src={selectedTick} alt="" />
                  )}
                </div>*/}
              <div className="card-title">
                {cType.name}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export default ChooseCollateralType;
