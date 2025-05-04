import Spinner from "../../../components/Spinner";
import useNftCollateral from "../../Marketplace/api/getNftCollateral";
import Carousal from "./LoanCarousel";
import styled from "styled-components";
import React from "react";
import { useWeb3React } from "@web3-react/core";
type Props = {
  loanId: number;
};

const NFTHolder: React.FC<Props> = ({ loanId }) => {
  const { chainId } = useWeb3React();
  const { data, loading, error } = useNftCollateral(loanId, chainId);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Spinner />
      </div>
    );
  }

  if (!data.viewNftCollateral || error) {
    return (
      <div>
        Error! <p>{loanId}</p>
      </div>
    );
  } else {
  }

  return (
    <>
      {data.viewNftCollateral.length > 1 ? (
        <Carousal row={1} slides={1} wrap>
          {data.viewNftCollateral.map((tokenInfo) => (
            <div>
              <NftImage>
                <img src={tokenInfo.image} alt="" />
              </NftImage>
            </div>
          ))}
        </Carousal>
      ) : (
        <>
          {data.viewNftCollateral.map((tokenInfo) => (
            <NftImage>
              <img src={tokenInfo.image} alt="" />
            </NftImage>
          ))}
        </>
      )}
    </>
  );
};
export default NFTHolder;

const NftImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .slick-slide > div {
    display: flex;
  }
`;
