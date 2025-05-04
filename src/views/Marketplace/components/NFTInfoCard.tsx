import styled from "styled-components";
import ClipboardIcon from "assets/icons/clipboard.svg";
import { NFTInfo } from "../types";
import { walletAddressFormatter } from "utils/conversion";
import { useClipBoard } from "hooks/useDebounce";

type Props = {
  nftInfoData: NFTInfo;
};

const NFTInfoCard: React.FC<Props> = ({ nftInfoData }) => {
  const { setClick, clicked } = useClipBoard();
  return (
    <NFTInfoWrapper>
      <NFTInfoHeader>
        <span className="nft">
          <img
            style={{ width: 39, height: 39, borderRadius: "50%" }}
            src={nftInfoData?.image}
            alt=""
          />
        </span>
      </NFTInfoHeader>
      <NFTInfoBody>
        <NFTInfoField>
          <span className="label">NFT:</span>
          <span className="value-with-icon">
            {walletAddressFormatter(
              nftInfoData.nftAddress ? nftInfoData.nftAddress : "N/A  "
            )}
            <img
              style={{
                cursor: "pointer",
                pointerEvents: clicked ? "none" : "unset",
              }}
              src={ClipboardIcon}
              alt=""
              onClick={() => {
                setClick({
                  value: true,
                  text: nftInfoData.nftAddress,
                  message: "Copied To Clipboard",
                });
              }}
            />
          </span>
        </NFTInfoField>
        <NFTInfoField>
          <span className="label">ID: </span>
          <span className="value-with-icon">
            {nftInfoData.nftId}
            <img src={ClipboardIcon} alt="" />
          </span>
        </NFTInfoField>
        <NFTInfoField>
          <span className="label">List Price: </span>
          <span className="value">{nftInfoData.price}</span>
        </NFTInfoField>
        <NFTInfoField>
          <span className="label">Platform: </span>
          <span className="value">{nftInfoData.plateform}</span>
        </NFTInfoField>
        <NFTInfoField>
          <span className="label">Collection: </span>
          <span className="value" style={{ textAlign: "right" }}>
            {nftInfoData.collection}
          </span>
        </NFTInfoField>
        <NFTInfoField>
          <span className="label">Last Item Activity: </span>
          <span className="value">
            {nftInfoData.last_activity ? nftInfoData.last_activity : "N/A"}
          </span>
        </NFTInfoField>
      </NFTInfoBody>
    </NFTInfoWrapper>
  );
};

const NFTInfoWrapper = styled.div`
  height: 230px;
  width: 207px;
  padding: 11px 11px 11px 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 15px auto;
`;
const NFTInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .chainlink {
    margin-left: auto;
    margin-right: 10px;
  }
`;
const NFTInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NFTInfoField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label {
    font-size: 13.12px;
    line-height: 19px;
  }

  .value {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }

  .value-with-icon {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    gap: 0 5px;
  }
`;

export default NFTInfoCard;
