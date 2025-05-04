
import Overlay from 'components/Overlay'
import styled from 'styled-components'

import { useState } from 'react'
import { Tab, Tabs, TabsContainer } from 'views/LoanBuilder/Main'
import AltCoins from './components/AltCoins'
import StableCoins from './components/StableCoins'

import SectionTitle from 'views/SectionTitle'
import { contentDescription, contentSubTitle, contentTitle } from 'views/SectionTitle/Content'
import { Popup_Content } from 'config/constants/infoData'


const TokensInContract = () => {
    const [activeTab, setActiveTab] = useState(0)



    return (
        <>
            <Overlay />
            <SectionTitle 
                title="Protection Reward Fund" 
                headtitle={contentSubTitle[Popup_Content.SEARCH]} 
                dialogtitle={contentTitle[Popup_Content.SEARCH]} 
                content={contentDescription[Popup_Content.SEARCH]} 
            />
            <Wrapper>
                <TabsContainer >
                    <Tabs className='altcoins'>
                        <StyledTab onClick={() => setActiveTab(0)} active={activeTab === 0} className="summary">Altcoins</StyledTab>
                        <StyledTab onClick={() => setActiveTab(1)} active={activeTab === 1} className="summary">StableCoins</StyledTab>
                    </Tabs>
                </TabsContainer>
                <TabContent>
                    {
                        activeTab === 0 && <AltCoins />
                    }
                    {
                        activeTab === 1 && <StableCoins />
                    }
                </TabContent>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  display:flex;
  flex-wrap: wrap;
  gap:12px;
  justify-content: flex-start;
  flex-direction: column;

   .address-value{
    display: flex;
    gap:5px;
   }
`;

const TabContent = styled.div``

const StyledTab = styled(Tab)``

export default TokensInContract