import styled from "styled-components";
import YfiLogo from "assets/icons/YFI-logo.svg";
import ClipboardIcon from "assets/icons/clipboard.svg";
import ChartIcon from "assets/icons/chart.svg";
import { TokenInfo } from "../types";
import ReactTooltip from "react-tooltip";
import {
  decimalValues,
  reduceNumber,
  walletAddressFormatter,
} from "utils/conversion";
import { useClipBoard } from "hooks/useDebounce";

const TokenInfoWrapper = styled.div`
  height: 230px;
  width: 207px;
  padding: 11px 11px 11px 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 15px auto;
`;
const TokenInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .chainlink {
    margin-left: auto;
    margin-right: 10px;
  }
`;
const TokenInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const TokenInfoField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;

  .label {
    font-size: 13.12px;
    line-height: 16px;
  }

  .value {
    font-size: 14.21px;
    line-height: 17px;
  }

  .value-with-icon {
    font-size: 14.21px;
    line-height: 17px;
    display: flex;
    align-items: center;
    gap: 0 5px;
  }
`;

const FantsyText = styled.p`
  font-family: "Organetto Ultra Bold", sans-serif;
  font-weight: 800;
  font-size: 13.12px;
  line-height: 18px;
  margin: 10px 0;
`;

type Props = {
  tokenInfoData: TokenInfo;
};

const TokenInfoCard: React.FC<Props> = ({ tokenInfoData }) => {
  console.log({ tokenInfoData })
  const { setClick, clicked } = useClipBoard();
  return (
    <TokenInfoWrapper>
      <ReactTooltip />
      <TokenInfoHeader>
        <span className="yfi">
          <img src={YfiLogo} alt="" />
        </span>
        {/* <span className="chainlink">
          <img src={ChainlinkIcon} alt="" />
        </span> */}
        <span className="chart">
          <img src={ChartIcon} alt="" />
        </span>
      </TokenInfoHeader>
      <TokenInfoBody>
        <TokenInfoField>
          <span className="label">Coin:</span>
          <span className="value-with-icon">
            {walletAddressFormatter(tokenInfoData.token_address)}
            <img
              style={{
                cursor: "pointer",
                pointerEvents: clicked ? "none" : "unset",
              }}
              onClick={() => {
                setClick({
                  value: true,
                  text: tokenInfoData.token_address,
                  message: "Copied To Clipboard",
                });
              }}
              src={ClipboardIcon}
              alt=""
            />
          </span>
        </TokenInfoField>
        <TokenInfoField>
          <span className="label">Name: </span>
          <span className="value">{tokenInfoData.name}</span>
        </TokenInfoField>
        <FantsyText>USD VALUE</FantsyText>
        <TokenInfoField>
          <span className="label">Total Tokens: </span>
          <span data-tip={tokenInfoData.amount} className="value">
            {reduceNumber(tokenInfoData.amount)}
          </span>
        </TokenInfoField>
        <TokenInfoField>
          <span className="label">Total USD Value: </span>
          <span data-tip={tokenInfoData.price} className="value">
            ${decimalValues(tokenInfoData.price)}
          </span>
        </TokenInfoField>
      </TokenInfoBody>
    </TokenInfoWrapper>
  );
};

export default TokenInfoCard;
