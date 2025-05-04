import Overlay from "components/Overlay";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { Tab, Tabs } from "views/LoanBuilder/Main";
import { getAllPlatformFee } from "utils/contracts/contractCalls";
import { useContractAddresses } from "utils/graphQueries/queries";
import { useWeb3React } from "@web3-react/core";
import Spinner from "components/Spinner";
import GovTiers from "./components/GovTiers";

import SectionTitle from "views/SectionTitle";
import {
  contentDescription,
  contentSubTitle,
  contentTitle,
} from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { chainId, account } = useWeb3React();
  const { result: contractAddresses } = useContractAddresses(
    chainId?.toString()
  );
  const [fee, setFee] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFee = async () => {
      setLoading(true);
      const res = await getAllPlatformFee(contractAddresses?.GovWorldDiamond);
      setFee(res);
      setLoading(false);
    };
    if (chainId) {
      getFee();
    }
  }, [contractAddresses?.GovWorldDiamond, chainId]);

  return (
    <>
      <Overlay />
      <SectionTitle
        title="Settings"
        headtitle={contentSubTitle[Popup_Content.SETTINGS]}
        dialogtitle={contentTitle[Popup_Content.SETTINGS]}
        content={contentDescription[Popup_Content.SETTINGS]}
      />
      <Wrapper>
        <Tabs className="altcoins">
          <StyledTab onClick={() => setActiveTab(0)} active={activeTab === 0} className="summary">Loan Tiers</StyledTab>
          <StyledTab onClick={() => setActiveTab(1)} active={activeTab === 1} className="summary">Fees</StyledTab>
        </Tabs>
        <TabContent>
          {!account && (
            <p className="text-center">Please connect wallet.</p>
          )}
          {account && loading && (
            <div className="d-flex justify-content-center">
              {" "}
              <Spinner />{" "}
            </div>
          )}

          {account && !loading && (
            <>
              {activeTab === 0 && <GovTiers />}
              {activeTab === 1 && (
                <div className="d-flex align-items-center gap-4 mt-5 flex-wrap justify-content-center">
                  <div>
                    <p>Platform Fee %</p>
                    <StyledTab className="summary">
                      {fee?.platformFee || 0}
                    </StyledTab>
                  </div>
                  <div>
                    <p>Auto sell %</p>
                    <StyledTab className="summary">
                      {fee?.autoSellFee || 0}
                    </StyledTab>
                  </div>
                  <div>
                    <p>Threshold %</p>
                    <StyledTab className="summary">
                      {fee?.threshold || 0}
                    </StyledTab>
                  </div>
                  <div>
                    <p>Liquidation (Percent Of Loan)</p>
                    <StyledTab className="summary">
                      {fee?.liquidation || 0}
                    </StyledTab>
                  </div>
                  <div>
                    <p>Max Loans Per Wallet</p>
                    <StyledTab className="summary">
                      {fee?.maxLoans || 0}
                    </StyledTab>
                  </div>
                </div>
              )}
            </>
          )}
        </TabContent>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 50px 12px 12px 12px;
  }
  .address-value {
    display: flex;
    gap: 5px;
  }
`;

const TabContent = styled.div`
  margin-left: 35px;
  padding-right: 35px;
`;

const StyledTab = styled(Tab)`
  p {
    min-width: 150px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Settings;
