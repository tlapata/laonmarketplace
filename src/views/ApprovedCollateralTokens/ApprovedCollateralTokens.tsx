import Overlay from "components/Overlay";
import styled from "styled-components";

import useApprovedTokens from "../../hooks/useApprovedTokens";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Card,
  CardsWrapper,
  Key,
  Value,
} from "views/LoanBuilder/components/ChooseCollaterals";
import {
  networkTokenFormatter,
  walletAddressFormatter,
} from "utils/conversion";
import Spinner from "components/Spinner";
import CopyDataToClipBoard from "components/CopyToClipBoard/CopyToClipBoard";
import ReactTooltip from "react-tooltip";
import { IconBox } from "components/IconBox/IconBox";
import SectionTitle from "views/SectionTitle";
import {
  contentDescription,
  contentSubTitle,
  contentTitle,
} from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";
import { GovSynthetic40Icon } from "components/Svg";


enum TokenTypeEnum {
  DEX = "isDex",
  VIP = "isElite",
}
const ApprovedCollateralTokens = () => {
  const [approvedTokens, { data, loading }] = useApprovedTokens();
  const [tokens, setTokens] = useState([]);
  const { chainId, account } = useWeb3React();

  
  useEffect(() => {
    if (chainId) {
      approvedTokens({
        variables: {
          chainId,
        },
      });
    } else {
      setTokens([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);
  useEffect(() => {
    if (data) {
      const collateralTokens = data.ApprovedTokens.filter(
        (x) => x.isTokenEnabledAsCollateral
      );
      setTokens(collateralTokens);
    }
  }, [data]);


  return (
    <>
      <Overlay />
      <SectionTitle
        title="Approved Tokens"
        headtitle={contentSubTitle[Popup_Content.APPROVED_TOKEN]}
        dialogtitle={contentTitle[Popup_Content.APPROVED_TOKEN]}
        content={contentDescription[Popup_Content.APPROVED_TOKEN]}
      />
      <Wrapper>
        {!account && <p>Please connect wallet.</p>}
        {account && loading && <Spinner />}
        {account && !loading && tokens?.length === 0 && <p>No data found</p>}

        {tokens?.map((token, index) => (
          <CardsWrapper key={index}>
            <Card className=" pointer position-relative mb-3">

                  <ReactTooltip />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      {token?.icon ? (
                        <img
                          height="37"
                          width="37"
                          src={
                           ( token.icon ??
                                  `assets/tokenIcons/${token?.symbol}.svg`  )   
                          }
                          alt=""
                          className="mb-2"
                        />
                      ) : (
                        <>
                        {
                         token.name.includes("GovSynthetic") ? <GovSynthetic40Icon className="icon"/> : <IconBox/>}
                        </>
                       
                      )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Key>Name:</Key>
                      <Value>{token?.symbol}</Value>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Key>Symbol:</Key>

                      <Value>{token?.name}</Value>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Key>USD Value:</Key>

                      <Value data-tip={token?.price}>
                        {networkTokenFormatter(token?.price)}
                      </Value>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Key>Address:</Key>
                      <Value className="address-value">
                        {walletAddressFormatter(token?.tokenAddress)}
                        <CopyDataToClipBoard textToCopy={token?.tokenAddress} />
                      </Value>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Key>Type:</Key>
                      <Value className="address-value">
                        {token.tokentype === TokenTypeEnum.DEX ? "Dex" : "VIP"}
                      </Value>
                    </div>
                  </div>


            </Card>
          </CardsWrapper>
        ))}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  margin: 50px min(115px, 5%) 20px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 50px 12px 12px 12px;
  }
  .address-value {
    display: flex;
    gap: 5px;
  }
  .icon{
    height:37px;
    width:37px;
    margin-bottom:0.5rem;
  }
`;

export default ApprovedCollateralTokens;
