import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";
import styled from "styled-components";
import { NextIcon } from "components/Svg";
import { Switch, SwitchThumb } from "components/Form/Switch";
import NFTDetails from "components/NFTDetails";
import { NftProps } from "./types";

import Input from "components/Input";
import rectangle from "assets/images/rectangle-white-upper.svg";
import rectangle_purple from "assets/images/loanbuilder/rectangle-purple.svg";
import rectangle1 from "assets/images/rectangle-white-lower.svg";
import CopyDataToClipBoard from "components/CopyToClipBoard/CopyToClipBoard";


const CardHover: React.FC<NftProps> = (props: NftProps) => {

  const history = useHistory();
  const [OpenPopup, setOpenPopup] = useState(false);

  const {
    nftID,
    address,
    owner,
    marketURL,
    lastActivity,
    price,
    collection,
    name,
    onchange,
    floor_price,
    symbol,
    image,
    creator,
    description,
    plateform,
    items,
    owners,
    traits,
    activity
  } = props;

  return (
    <>
      <div className="top-info">
        <div>
          <CardHeading>
            <h4>Collection <span>#{nftID}</span></h4>
          </CardHeading>
          <CardHeading>{name ? name : "N/A"}</CardHeading>
        </div>
        <a className="check-details" onClick={() => setOpenPopup(true)}>
          <NextIcon />
        </a>
        <NFTDetails 
          open={OpenPopup} 
          setOpen={setOpenPopup} 
          image={image}
          address={address}
          name={name}
          creator={creator}
          owner={owner}
          description={description}
          plateform={plateform}
          marketURL={marketURL}
          nftID={nftID}
          items={items}
          owners={owners}
          last_activity={lastActivity}
          traits={traits}
          activity={activity}
        />
      </div>
      <CardHeading>
        <h4>Contract:</h4>
        <div>
          <a href={`https://bscscan.com/address/${address}`} target="_blank">{`${address.slice(0, 7)}...${address.slice(address.length - 3)}`}</a>
        </div>
      </CardHeading>
      <Content>
        <div className="switch">
          <Switch>
            <SwitchThumb />
          </Switch>
        </div>
        <div className="floor-price">
          <div>
            <CardText>Floor</CardText>
            <p><strong>{floor_price}</strong> {symbol}</p>
          </div>
          <div>
            <CardText>USD</CardText>
            <p>${+price?.toFixed(2)}</p>
          </div>
        </div>
      </Content>

      {/*<DetailsWrapper>
        <CardHeading>
          owned by <span>{owner}</span>
        </CardHeading>
        <Content>
          <CardHeading>Platform</CardHeading>
          <CardText>{platform}</CardText>
        </Content>
        <Content>
          <CardHeading>Contract</CardHeading>
          <CardText>
            <CopyContent>
              <div>{`${address.slice(0, 7)}...${address.slice(
                address.length - 3
              )}`}</div>
              <CopyDataToClipBoard textToCopy={address} />
            </CopyContent>
          </CardText>
        </Content>
        <Content>
          <CardHeading>Last Item Activity</CardHeading>
          <CardText>{lastActivity ? lastActivity : "No Activity"}</CardText>
        </Content>
        {price === 0 ? (
          <div style={{ marginTop: "10px" }}>
            <InputWrapper active={false}>
              <p className="summary">
                <StyledInput
                  type="number"
                  inputbg={true}
                  containerClassName="m-auto"
                  sizeVariant="xs"
                  placeholder="0.00"
                  onChange={(e) => onchange(e)}
                />
              </p>
            </InputWrapper>
          </div>
        ) : null}
      </DetailsWrapper>*/}
    </>
  );
};


const CardHeading = styled.div`
  font-weight: 600;
  margin: 0 0 8px;

  h4 {
    font-size: 0.75rem;
    color: rgba(134, 135, 188, 0.4);
    margin: 0;
    padding: 0;
    font-weight: 600;
    position: relative;

    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.purple};
      margin: 0 0 0 5px;
      position: absolute;
      top: -5px;
    }
  }

  a {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;

  .switch {
    button {
      transform: rotate(270deg);
    }
  }

  .floor-price {
    display: flex;
    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;

    p {
      margin: 0;
      padding: 10px;
      white-space:nowrap;

      strong {
        font-size: 1rem;
      }
    }

    div {
      &:last-child {
        p{
          padding-top: 13px;
        }
      }
    }
  }
`;

const CardText = styled.div`
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  opacity: 0.5;
`;




const InputWrapper = styled.div<{ active?: Boolean }>`
  min-width: 27.22px;
  text-align: center;
  cursor: pointer;
  p {
    background-clip: content-box;
    padding: 3px;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;

    ${(props) =>
    props.active
      ? `background: linear-gradient(90deg, #F1C6FF -16.66%, #BD0AF8 24.05%, #365CFC 99.31%), rgba(255, 255, 255, 0.25);background-clip:content-box;`
      : `background-color: rgba(255, 255, 255, 0.25);`}
  }
  p.summary {
    width: 100%;
    height: 30px;
  }
  &.button {
    background: none !important;
  }
`;

const StyledInput = styled(Input) <{ inputbg }>`
  box-shadow: ${(props) =>
    props.theme.isDark
      ? "0px 0.69186px 3.4593px rgba(255, 255, 255, 0.1)"
      : "0px 0.69186px 3.4593px rgba(0, 0, 0, 0.1);"};
  border-radius: 0px !important;
  color: ${(props) => props.theme.colors.adminDashboadText};
  background: none;
  ::placeholder {
    color: white;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    box-shadow: ${(props) =>
    props.theme.isDark
      ? "0px 0.214844px 1.07422px rgba(0, 0, 0, 0.1)"
      : "0px 0.214844px 1.07422px rgba(0, 0, 0, 0.1);"};
  } ;
`;
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

export default CardHover;