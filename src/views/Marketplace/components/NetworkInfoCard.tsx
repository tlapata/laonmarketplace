import styled from "styled-components";
import YfiLogo from "assets/icons/YFI-logo.svg";
import ClipboardIcon from "assets/icons/clipboard.svg";
import ChartIcon from "assets/icons/chart.svg";
import ChainlinkIcon from "assets/icons/chainlink.svg";
import { NetworkInfo } from "../types";

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
  networkInfoData: NetworkInfo;
};

const NetworkInfoCard: React.FC<Props> = ({ networkInfoData }) => {
  return (
    <TokenInfoWrapper>
      <TokenInfoHeader>
        <span className="yfi">
          <img src={YfiLogo} alt="" />
        </span>
        <span className="chainlink">
          <img src={ChainlinkIcon} alt="" />
        </span>
        <span className="chart">
          <img src={ChartIcon} alt="" />
        </span>
      </TokenInfoHeader>
      <TokenInfoBody>
        <TokenInfoField>
          <span className="label">Coin:</span>
          <span className="value-with-icon">
            {networkInfoData.symbol}
            <img src={ClipboardIcon} alt="" />
          </span>
        </TokenInfoField>
        <TokenInfoField>
          <span className="label">Name: </span>
          <span className="value">{networkInfoData.name}</span>
        </TokenInfoField>
        <FantsyText>USD VALUE</FantsyText>
        <TokenInfoField>
          <span className="label">Total Tokens: </span>
          <span className="value">{networkInfoData.amount}</span>
        </TokenInfoField>
        <TokenInfoField>
          <span className="label">Total USD Value: </span>
          <span className="value">${networkInfoData.price.toFixed(2)}</span>
        </TokenInfoField>
      </TokenInfoBody>
    </TokenInfoWrapper>
  );
};

export default NetworkInfoCard;
