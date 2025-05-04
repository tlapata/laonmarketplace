import { Dialog, DialogTrigger, DialogContent } from "components/Dialog";
import IconButton from "components/Elements/IconButton";
import EyeIcon from "assets/icons/eye.svg";
import EyeIcon2 from "assets/icons/eye-icon-2.svg";
import type { CollateralType } from "../types";
import TokenInfoCard from "./TokenInfoCard";
import NFTInfoCard from "./NFTInfoCard";
import useNftCollateral from "../api/getNftCollateral";
import useTokenCollateral from "../api/getTokenCollateral";
import Spinner from "components/Spinner";
import useNetworkCollateral from "../api/getNetworkCollateral";
import NetworkInfoCard from "./NetworkInfoCard";
import Carousal from "./LoanCarousel";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { __nft_collateral_set, __tokens_collateral_set } from "config/constants/sets";
import { NetWorkChainId } from "config/constants/types";

type Props = {
  loanId: number;
  collateralType: CollateralType;
  largeIcon?: boolean;
  parentPressed?: boolean;
  parentSetPressed?: Function;
};

const CollateralSummaryDialog: React.FC<Props> = ({
  loanId,
  collateralType,
  largeIcon,
  parentPressed,
  parentSetPressed,
}) => {
  useEffect(() => {
    if (parentPressed) {
      parentSetPressed(false);
      dialogRef.current.click();
    }
  });
  const dialogRef = React.useRef(null);
  return (
    <Dialog>
      <DialogTrigger
        asChild
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => {
          dialogRef.current.click();
        }}
        ref={dialogRef}
      >
        <IconButton>
          <img
            src={largeIcon ? EyeIcon2 : EyeIcon}
            alt="more-info"
            width={largeIcon ? 19 : "auto"}
          />
        </IconButton>
      </DialogTrigger>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        size="small"
        className="collateral-content"
        style={{ minHeight: "40vh" }}
      >
        <ContentHolder>
          {
            __nft_collateral_set.has(collateralType)
              ? (
                <NftContent loanId={loanId} />
              ) : __tokens_collateral_set.has(collateralType) ? (
                <TokenContent loanId={loanId} />
              ) : (
                <NetworkContent loanId={loanId} />
              )}
        </ContentHolder>
      </DialogContent>
    </Dialog>
  );
};

const ContentHolder = styled.div`
  .left-arrow {
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(16px);
    cursor: pointer;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translateY(16px);
    cursor: pointer;
  }
`;

const NetworkContent: React.FC<{ loanId: number }> = ({ loanId }) => {
  const { chainId } = useWeb3React();
  const { data, loading, error } = useNetworkCollateral(loanId, chainId ? chainId : NetWorkChainId.BSC);

  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Spinner />
      </div>
    );
  }

  if (!data?.viewNetworkTokenCollateral || error) {
    return <div>Error!</div>;
  }

  return (
    <>
      {data?.viewNetworkTokenCollateral.map((networkInfo, ind: number) => (
        <NetworkInfoCard key={ind} networkInfoData={networkInfo} />
      ))}
    </>
  );
};

const NftContent: React.FC<{ loanId: number }> = ({ loanId }) => {
  const { chainId } = useWeb3React();
  const { data, loading, error } = useNftCollateral(loanId, chainId ? chainId : NetWorkChainId.BSC);
  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Spinner />
      </div>
    );
  }

  if (!data?.viewNftCollateral || error) {
    return <div>Error!</div>;
  }

  return (
    <>
      {data?.viewNftCollateral.length > 1 ? (
        <Carousal row={1} wrap>
          {data?.viewNftCollateral.map((tokenInfo, ind) => (
            <NFTInfoCard key={ind} nftInfoData={tokenInfo} />
          ))}
        </Carousal>
      ) : (
        <>
          {data?.viewNftCollateral.map((tokenInfo, ind) => (
            <NFTInfoCard key={ind} nftInfoData={tokenInfo} />
          ))}
        </>
      )}
    </>
  );
};

const TokenContent: React.FC<{ loanId: number }> = ({ loanId }) => {
  const { chainId } = useWeb3React()
  const { data, loading, error } = useTokenCollateral(loanId, chainId ? chainId : NetWorkChainId.BSC);

  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Spinner />
      </div>
    );
  }

  if (!data?.viewTokenCollateral || error) {
    return <div>Error!</div>;
  }

  return (
    <>
      {data?.viewTokenCollateral?.length > 1 ? (
        <Carousal row={1} wrap>
          {data?.viewTokenCollateral?.map((tokenInfo, ind: number) => (
            <TokenInfoCard key={ind} tokenInfoData={tokenInfo} />
          ))}
        </Carousal>
      ) : (
        <>
          {data?.viewTokenCollateral?.map((tokenInfo, ind: number) => (
            <TokenInfoCard key={ind} tokenInfoData={tokenInfo} />
          ))}
        </>
      )}
    </>
  );
};

export default CollateralSummaryDialog;
