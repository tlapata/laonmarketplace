import styled from "styled-components";
import Copy from "assets/images/loanbuilder/copyiconnew.svg";
import { NftProps } from "components/CardHover/types";
import { useClipBoard } from "hooks/useDebounce";
import { configGraphQL as config } from "config/constants/config";
import { useWeb3React } from "@web3-react/core";
import { fetchNetworkDetail } from "utils/wallet";


const CardHover: React.FC<NftProps> = (props: NftProps) => {
  const {
    nftID,
    address,
    owner,
    platform,
    lastActivity,
    price,
    collection,
    name,
  
  } = props;
  const { setClick, clicked } = useClipBoard();
  const { chainId } = useWeb3React();

  return (
    <div>
      <CardHeading>{name ? name : "N/A"}</CardHeading>
      <CardText>
        owned by <span>{owner}</span>
      </CardText>
      <DetailsWrapper>
        <Content>
          <CardHeading>Platform</CardHeading>
          <CardText>{platform}</CardText>
        </Content>
        <Content>
          <CardHeading>Contract</CardHeading>
          <CardText>
            <CopyContent>
              <div onClick={() =>
                window.open(
                  `${config.openSeaUrl}/${fetchNetworkDetail(
                    chainId
                  ).name.toLowerCase()}/${address}/${nftID}`
                )
              }>{`${address.slice(0, 7)}...${address.slice(address.length - 3)}`}</div>
              <img
                src={Copy}
                style={{
                  cursor: "pointer",
                  pointerEvents: clicked ? "none" : "unset",
                }}
                alt=""
                onClick={() => {
                  setClick({
                    value: true,
                    text: address,
                    message: "Copied To Clipboard",
                  });
                }}
              />
            </CopyContent>
          </CardText>
        </Content>
        <Content>
          <CardHeading>ID</CardHeading>
          <CardText>
            <CopyContent>
              <div>{nftID}</div>
              <img
                src={Copy}
                alt=""
                style={{
                  cursor: "pointer",
                  pointerEvents: clicked ? "none" : "unset",
                }}
                onClick={() => {
                  setClick({
                    value: true,
                    text: nftID,
                    message: "Copied To Clipboard",
                  });
                }}
              />
            </CopyContent>
          </CardText>
        </Content>
        <Content>
          <CardHeading>Price</CardHeading>
          <CardText>${+price?.toFixed(2)}</CardText>
        </Content>
        <Content>
          <CardHeading>Collection</CardHeading>
          <CardText>{collection}</CardText>
        </Content>

        <Content>
          <CardHeading>Last Item Activity</CardHeading>
          <CardText><>{lastActivity ? lastActivity : "No Activity"}</></CardText>
        </Content>
      </DetailsWrapper>
    </div>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CopyContent = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 5px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  gap:10px;
`;
const CardHeading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 10.8287px;
  line-height: 150%;

  text-transform: capitalize;
`;

const CardText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 8.50828px;
  line-height: 150%;
  text-transform: capitalize;
  color: #ffffff;
  span {
    color: #cb8cff;
  }
`;
export default CardHover;
