import styled from "styled-components";
import { Popup_Content } from "../../config/constants/infoData";
import {
  ApprovedIcon,
  DashboardIcon,
  LeaderboardIcon,
  TiersIcon,
  SettingIcon,
  ProtectionRewardIcon,
  GovLendIcon,
  ApyArenaIcon,
  ReviewLoanIcon,
  GovOverviewIcon,
} from "components/Svg";


export const Wrapper = styled.div`
  display: flex;
  gap: 5px; 
}
  .icon-filter {
    width: 20px;
    height: 20px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%)
      hue-rotate(44deg) brightness(114%) contrast(105%);
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  font-size: 0.875rem;
  padding: 20px 0 0;

  p{
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const contentTitle = {
  [Popup_Content.DASHBOARD]: (
    <Wrapper>
      Dashboard
    </Wrapper>
  ),
  [Popup_Content.LEADERBOARD]: (
    <Wrapper>
      LeaderBoard
    </Wrapper>
  ),
  [Popup_Content.MYSTAT]: (
    <Wrapper>
      My Stats
    </Wrapper>
  ),
  [Popup_Content.APPROVED_TOKEN]: (
    <Wrapper>
      Approved TOkens
    </Wrapper>
  ),
  [Popup_Content.SETTINGS]: (
    <Wrapper>
      Settings
    </Wrapper>
  ),
  [Popup_Content.SEARCH]: (
    <Wrapper>
      Protection Reward Fund
    </Wrapper>
  ),
  [Popup_Content.LOANMARKETPLACE]: (
    <Wrapper>
      Loan Marketplace
    </Wrapper>
  ),
  [Popup_Content.LOANBUILDER]: (
    <Wrapper>
      Choose Loan Type
    </Wrapper>
  ),
  [Popup_Content.COMPETE_FOR_STABLECOIN]: (
    <Wrapper>
      Apy Arena
    </Wrapper>
  ),
  [Popup_Content.REVIEW_LOAN_OFFER]: (
    <Wrapper>
      Review Loan Offer
    </Wrapper>
  ),
  [Popup_Content.GOVPAD]: (
    <Wrapper>
      LoanPad presales
    </Wrapper>
  ),
  [Popup_Content.FAIRLAUNCH]: (
    <Wrapper>
      Fairlaunch Whitelist
    </Wrapper>
  ),
  [Popup_Content.TERMS_AND_CONDITIONS]: (
    <Wrapper>
      Create Loan Offer
    </Wrapper>
  ),
};
export const contentSubTitle = {
  [Popup_Content.DASHBOARD]: (
    <Wrapper className="size">
      Overview
    </Wrapper>
  ),
  [Popup_Content.LEADERBOARD]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.MYSTAT]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),

  [Popup_Content.APPROVED_TOKEN]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.SETTINGS]: (
    <Wrapper>
      Platform Fee %
    </Wrapper>
  ),
  [Popup_Content.SEARCH]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.LOANMARKETPLACE]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.LOANBUILDER]: (
    <Wrapper>
      Tier membership determines borrowers loan types
    </Wrapper>
  ),
  [Popup_Content.COMPETE_FOR_STABLECOIN]: (
    <Wrapper>
      Competing in the Apy Arena
    </Wrapper>
  ),
  [Popup_Content.REVIEW_LOAN_OFFER]: (
    <Wrapper>
      Tips for Borrowers
    </Wrapper>
  ),
  [Popup_Content.GOVPAD]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.FAIRLAUNCH]: (
    <Wrapper>
      Overview
    </Wrapper>
  ),
  [Popup_Content.TERMS_AND_CONDITIONS]: (
    <Wrapper>
      Terms and Conditions
    </Wrapper>
  ),
};

export const contentDescription = {
  [Popup_Content.DASHBOARD]: (
    <>
      <ContentWrapper>
        <p>
          The Loan Market dashboard provides borrowers an overview of their wallet
          holdings, including the USD value of all approved tokens and NFTs.
        </p>
        <p>
          Tier Level Membership Display: Borrowers' Tier Level Membership,
          ranging from Bronze to Rhodium, shows the Qualified to Borrow Amount:
          <img
            className="image"
            src={require("../../assets/images/dashboard-Data.png").default}
            alt="dashboard data"
          />
        </p>
        <p>
          Get a Tier! Purchase GOV Tokens: Borrowers lacking the required GOV
          tokens can easily navigate to Pancakeswap by clicking the Buy Now
          button in the header to purchase the necessary tokens for tier level
          membership.
        </p>
        <p>
          Request your favorite token: Borrowers have the option to request the
          addition of their preferred tokens as approved collateral through
          private Telegram groups exclusive to tier members.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.LEADERBOARD]: (
    <>
      <ContentWrapper>
        <p>
          The leaderboard serves as a means to reward strong holders within the
          Loan Market community. First and foremost with voting power. The
          leaderboard rankings are retrieved directly from blockchain explorers,
          ensuring transparency and accuracy.
        </p>
        <h3> Snapshots:</h3>
        <p>
          Snapshots are utilized for various purposes within the Loan Market
          platform:
        </p>
        <p>
          Pre-sale allocations for projects launched on LoanPad. Fairlaunch
          whitelist spots for upcoming no-rug Meme forks Payouts of Protection
          Reward Fund tokens to Loan Tier Members who are also stablecoin
          lenders.
        </p>
        <p>
          All snapshots provide data of GOV token holdings at a specific moment
          in time, enabling fair and equitable distribution of benefits and
          rewards.
        </p>
      </ContentWrapper>
    </>
  ),

  [Popup_Content.MYSTAT]: (
    <>
      <ContentWrapper>
        <ul>
          <p>
            Welcome to "My Stats," your personalized dashboard. This page is
            your go-to spot for tracking and managing your borrowing and lending
            activities, whether you're borrowing, lending, or both. By
            connecting your wallet, you unlock a range of features designed to
            help you stay on top of your financial game.
          </p>
          <h5>Key Features: </h5>
          <li>
            Total Stablecoins Loaned and Borrowed: Keep tabs on the total amount
            of stablecoins you've loaned over time, giving you a snapshot of
            your lending journey.
          </li>
          <br />
          <li>
            Total Interest Earned and Paid: Track how much interest you've
            earned as a Lender and paid as a Borrower watching your passive
            income and liquidity from your crypto holdings grow.
          </li>
          <br />
          <li>
            Loan Offer Details: Dive into the specifics of your loan offers,
            review terms, and make adjustments to attract potential lenders.
          </li>
          <br />
          <li>
            Active Loans: Stay updated on the status of your active loans, so
            you always know where you stand.
          </li>
          <br />
          <li>
            Settled Loans: Look back on loans that have been successfully
            settled, learning from past experiences.
          </li>
          <br />
          <li>
            Liquidated Loans: Stay informed about any liquidated loans, helping
            you understand and manage risk.
          </li>
          <br />
          <br />
          <h5>Loan Management Tools:</h5>
          <li>
            Loan Offer Adjustment: Fine-tune your loan offers to make them more
            appealing to lenders, increasing your chances of getting funded.
          </li>
          <br />
          <li>
            Active Loan Adjustment: Take control of your active loans by making
            early partial or full paybacks, managing your repayment terms on
            your own terms.
          </li>
        </ul>
      </ContentWrapper>
    </>
  ),

  [Popup_Content.APPROVED_TOKEN]: (
    <>
      <ContentWrapper>
        <h5>DEX Token Collateral Approval: </h5>
        <p>
          Any token with V3 Liquidity and a BNB LP pair can be approved as
          collateral for the Loan Market community. Holders have the opportunity to
          make loan offers and borrow stablecoins from peers against the value
          of approved tokens.
        </p>
        <h5>LoanPad Collateral Approval: </h5>
        <p>
          Projects participating on LoanPad Launchpad can be approved as
          collateral within our platform. This not only provides additional
          security for lenders but also creates a price floor for the project's
          native token, enhancing its stability and value.
        </p>
        <h5>Fairlaunch Meme Fork Approval: :</h5>
        <p>
          2nd chances are a gift. Fairlaunch meme forked tokens are
          auto-approved as collateral, with 80% of the funds raised allocated to
          liquidity. These LP tokens will be burned and renounced, ensuring
          transparency and security for token holders. Additionally, 10% of the
          funds raised will be allocated to transparent marketing initiatives,
          supporting the growth and visibility of the project. These marketing
          groups will be listed on the forked meme token website, providing full
          visibility to the community.
        </p>
        <h5> VIP Synthetic Mint Function for Strategic Partners: </h5>
        <p>
          For tokens that are strategic partners, we activate the VIP function.
          This feature mints a synthetic version of their native token back into
          the holder's wallet at a 1:1 ratio while stablecoin loans are active.
          This not only allows community members to retain all benefits but also
          creates a price floor for the project by allowing borrowing against
          the token's value instead of selling, holders can support the
          project's stability and growth while enjoying the perks of membership.
        </p>
      </ContentWrapper>
    </>
  ),

  [Popup_Content.SEARCH]: (
    <>
      <ContentWrapper>
        <h5>Protection Reward Fund: </h5>
        <p>
          The Protection Reward Fund comprises all remaining collateral tokens
          and stablecoins from the difference between the principal plus
          interest payout to lenders and the final liquidation threshold of 125%
          from liquidated loans. These tokens serve as a safeguard to protect
          future lenders in scenarios where there's a significant decline in
          collateral value, and the principal loan amount plus interest cannot
          be recovered during liquidation.
        </p>
        <h5>Priority Payouts: </h5>
        <p>
          Priority payouts of principal plus interest owed are allocated to
          institutional lenders and Loan Tier Members who are also stablecoin
          lenders. This ensures that these key stakeholders receive timely
          compensation and reinforces the stability and trustworthiness of our
          lending ecosystem.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.SETTINGS]: (
    <>
      <ContentWrapper>
        <p>
          The Platform Fee is paid by borrowers only upon loan activation by a
          stablecoin lender. It is a percentage of the requested stablecoin loan
          amount and is automatically deducted once the loan offer is funded.
        </p>
        <h5>Example: </h5>
        <p>
          Borrower below wants to borrow $1,000 for 10 days. The Platform Fee is
          set at 2% and the loan amount is $1,000 so the platform fee is $20.
          The APY% Fee is also deducted at the time the loan is funded, this fee
          is determined by the borrower when they choose the APY% they are
          offering to the Lender and the term length of the loan.
        </p>
        <img
          src={require("../../assets/images/review-loandata.png").default}
          alt="review-loandata"
        />
        <br />
        <Wrapper style={{ textTransform: "uppercase" }}>
          {" "}
          <SettingIcon className="icon-filter" /> autosell fee %{" "}
        </Wrapper>
        <p>
          AutoSell is an option lenders can choose before they fund any token
          backed loan offer. It is designed to protect a busy lender from the
          rapid decline in the value of a collateral token that resulted in
          liquidation. If the lender did not choose AutoSell then only the
          collateral tokens will be transferred to the lender wallet at
          liquidation = equal to the USD value at the time of liquidation of 1.
          principal amount of stablecoins loaned plus 2. the earned interest
          (APY% Fee) accumulated up to the date and time of liquidation. Since
          the collateral tokens would be transferred upon liquidation to the
          lender wallet, lender didn’t have time to sell the collateral tokens
          themselves and the value of the collateral token continues to drop
          then the lender risks realizing a loss. The Liquidation Threshold
          attempts to lessen the risk to a lender who did not choose AutoSell,
          but it is not as safe as enabling AutoSell before funding a loan
          offer.
        </p>
        <h5>Example:</h5>
        <p>
          If a lender funds a token backed loan offer of $10,000 and the
          AutoSell Fee is set to 0.75% then amount deducted at the time of
          liquidation is $75. AutoSell is not available for NFT backed or
          synthetic backed loan offers.{" "}
        </p>
        <img
          src={require("../../assets/images/liquadation-table.png").default}
          alt="liquadation-table"
        ></img>

        <Wrapper style={{ textTransform: "uppercase" }}>
          {" "}
          <SettingIcon className="icon-filter" /> Final liquidation %
        </Wrapper>
        <p>
          Final Liquidation % the percentage of the loan amount that if the USD
          value of the collateral (for token backed loans) reaches then
          liquidation occurs. This percentage can be changed by community vote,
          currently it is set at 125% of the loan amount.
          <br />
          To avoid final liquidation on NFT loans all you need to do is pay your
          loan back before the loan term ends. To avoid liquidation on token
          backed loans pay attention to the liquidation graph and if you are
          getting close to liquidation consider 1. making an early partial
          payback 2. making an early full payback. Other strategies include
          making initial loan offers with a lower LTV or a more diversified
          portfolio of tokens (Multi-Token Loan Offers) to reduce volatility.
        </p>
        <h5>Example:</h5>
        <p>
          If a borrower takes out a $10,000 loan for 10 days from a lender and
          the Final Liquidation is set to 125%, then when underlying collateral
          tokens reach a value of $10,250 liquidation will occur and the lender
          would receive either collateral tokens or stablecoins depending on if
          AutoSell was enabled. If AutoSell was not enabled by the lender then
          upon liquidation they would receive collateral tokens at the time of
          liquidation equal to the value of 1. The original principal loan
          amount of $10,000 + 2. The interest (APY% Fee) earned up to the date
          and time of liquidation + 3. The Liquidation Threshold % of collateral
          tokens.
          <br />
          If AutoSell was enabled by the lender then upon liquidation they would
          receive stablecoins at the time of liquidation equal to the value of
          1. The original principal loan amount of $10,000 + 2. The interest
          (APY% Fee) earned up to the date and time of liquidation + 3.
          Protection Reward Funds that would shore up any loss if the collateral
          devalued too quickly to recoup principal plus the earned interest
          (APY% Fee) at the time of liquidation (Protection Reward Fund is only
          available for AutoSell enabled loans).
          <br />
          *Protection Reward Fund is the leftover collateral tokens or
          stablecoins accumulated from liquidations see more information here
          PRFund
        </p>

        <Wrapper style={{ textTransform: "uppercase" }}>
          {" "}
          <SettingIcon className="icon-filter" /> liquidation Threshold %
        </Wrapper>
        <p>
          Liquidation Threshold % is the amount of additional collateral tokens
          delivered to the Lender wallet upon liquidation of a non-AutoSell
          loan. This is to try and lessen the risk to lenders from an unforeseen
          drastic drop in the value of collateral tokens at the time of
          liquidation. Enabling AutoSell is would be a way to lessen the risk in
          case the collateral tokens continue to drop in value after liquidation
          but before the lender can sell them on the open market.{" "}
        </p>
        <h5>Example:</h5>
        <p>
          If a lender funds a token backed loan offer of $10,000 and the
          Liquidation Threshold is set to 0.5% then the additional collateral
          tokens deposited into the lenders wallet would be equal to $50 USD
          value at the time of liquidation.{" "}
        </p>

        <Wrapper style={{ textTransform: "uppercase" }}>
          {" "}
          <SettingIcon className="icon-filter" />
          Max loans per wallet
        </Wrapper>
        <p>
          Max loans per wallet is a max number of loans at one time per wallet.
          Institutional lenders are whitelisted to have unlimited number of
          loans per wallet as a way to fund “blocks of loans” at a time.
          Loan Market offers these lenders additional connecting with Loan Market in
          partnerships as a whale lender who can increase peer lending within
          our community and whom Loan Market will discuss incentivized reward
          solutions.
        </p>

        <Wrapper style={{ textTransform: "uppercase" }}>
          {" "}
          <SettingIcon className="icon-filter" /> Loan Tier levels
        </Wrapper>
        <p>
          Displayed transparently within the settings, Loan Tier Levels provide
          community members with clear insights into the loan types,
          loan-to-value (LTV) ratios, approximate USD value fo their tier level,
          and the required amount of GOV tokens associated with each tier level
          membership. Alongside these benefits, members also gain access to
          additional perks such as priority access to LoanPad launches and fair
          launch whitelist spots for forked meme tokens. This user-friendly
          feature ensures that community members can easily understand and
          access the benefits corresponding to their tier level, enhancing their
          overall experience within our platform.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.LOANMARKETPLACE]: (
    <>
      <ContentWrapper>
        <p>
          The Loan Marketplace serves as a pivotal platform where stablecoin
          lenders strategically identify optimal risk-to-reward opportunities to
          leverage their stablecoins. Lenders can efficiently sort through
          categorized loan offers, assessing single token, single NFT,
          multi-token, multi-NFT, and network token options. Furthermore,
          lenders can scrutinize collateral tokens and NFTs to assess loan
          attractiveness and review loan term lengths to align with their
          investment strategy. This transparent display of associated APY and
          approximate USD earnings upon loan maturity, empowers lenders to make
          informed decisions and maximize potential earnings.
        </p>
        <h5>Autosell Feature for Token-Backed Loans: </h5>
        <p>
          For lenders opting to fund single or multi-token token-backed loan
          offers, the Autosell feature provides an added layer of risk
          management. This functionality automatically executes the sale of
          liquidated collateral tokens on the decentralized exchange (DEX),
          swiftly converting them back into stablecoins. The resulting proceeds,
          along with accrued interest, are promptly deposited into the lender's
          wallet upon liquidation. By seamlessly integrating risk-mitigation
          mechanisms, the Loan Marketplace endeavors to foster a secure and
          efficient lending environment for stablecoin lenders, ensuring optimal
          utilization of funds and facilitating opportunities for wealth
          generation.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.LOANBUILDER]: (
    <>
      <ContentWrapper>
        <p>
          The Loan Tier Membership Level you hold determines types of Loan Offers
          a holder (Borrower) can make to stablecoin lenders. Tier level also
          determines the maximum Loan to Value (LTV %) a borrow can receive
          against the value of their crypto portfolio. See Settings for
          <span>Tier Level Loan Types and Max LTV. </span>
        </p>
        <h5>Example: </h5>
        <p>
          Loan Types: If the Bronze and Silver level don’t allow a multi-token
          or multi-NFT loan offers then the holder of multiple tokens or NFTs
          can only create one loan offer per separate token or NFT. A
          diversified portfolio may be more attractive to a lender so a higher
          Tier is required.
          <br />
          LTV: The loan to value (LTV goes up the higher your tier level). This
          means the borrower can ask for more stablecoins against the value of
          their tokens or NFTs - If collateral token or NFT value is $10,000
          then a Bronze LTV is 30% and borrower can ask for maximum $3,000,
          Silver 40% or $4,000, Gold 50% or $5,000, Platinum 70% or $7,000, or
          Rhodium 80% or $8,000.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.COMPETE_FOR_STABLECOIN]: (
    <>
      <ContentWrapper>
        <p>
          In the APY Arena, borrowers are provided with valuable insights into
          the competitive landscape of both token-backed and NFT-backed loan
          offers. Here, borrowers can strategically assess and adjust their
          offered annual percentage yields (APYs) to stand out among competitors
          while maintaining prudent risk management practices.
          <br />
          <br />
          By accessing the APY Arena, borrowers gain visibility into various APY
          metrics, including the best APY offer, the top 10 average offers, and
          the average APY among the top 25. This comprehensive view empowers
          borrowers to make informed decisions about the APYs they are willing
          to offer, ensuring they remain competitive in the marketplace.
          <br />
          <br />
          While aiming for the top spot in APY rankings may seem enticing,
          borrowers are encouraged to strike a balance between offering
          competitive APYs and managing risk effectively. Excessively high APYs
          may attract lenders but could also introduce heightened liquidation
          risks, particularly in token-backed loans susceptible to market
          downturns.
          <br />
          <br />
          Borrowers can adjust the offered APY on the Loan Summary page, so no
          worries what you choose here! Borrowers will be able to review the
          total cost of their loan, including interest expenses based on the
          selected APY, before finalizing their loan offer. This user-centric
          feature promotes transparency and flexibility, empowering borrowers to
          customize their loan terms with confidence on the Loan Market platform.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.REVIEW_LOAN_OFFER]: (
    <>
      <ContentWrapper>
        <p>
          By implementing these tips, borrowers can enhance the attractiveness
          of their loan offers, mitigate risks, and increase the likelihood of
          attracting funding from lenders on the Loan Market Loan Builder and Loan
          Marketplace platform.
          <br />
          <br />
          Quality Tokens: Choose reputable and high-quality tokens to include in
          your collateral portfolio, as they are more likely to retain value
          during market fluctuations.
          <br />
          <br />
          Consider Collateral Portfolio: Offer a well-balanced collateral
          portfolio in exchange for stablecoin loans, ensuring that it provides
          sufficient security for lenders.
          <br />
          <br />
          Multi-NFT Offers: For NFT loan offers, utilize multi-NFT offerings to
          diversify your collateral and reduce risk. Ensure timely repayment
          based on the chosen loan term length to maintain collateral integrity.
          <br />
          <br />
          Market Fluctuations: Stay informed about market fluctuations and
          adjust your loan terms accordingly. Be prepared to adapt your strategy
          to changing market conditions to mitigate risks effectively.
          <br />
          <br />
          Maintain Adequate Stablecoin Reserves: Always have enough stablecoins
          readily available to repay your loan at any time to avoid liquidation.
          Maintain a buffer to cover potential market downturns and ensure
          financial stability.
          <br />
          <br />
          APY Consideration: Be mindful of the annual percentage yield (APY) you
          offer on token-backed loans. Avoid setting excessively high APY rates
          that could increase liquidation risk and deter potential lenders.
          <br />
          <br />
          By implementing these tips, borrowers can enhance the attractiveness
          of their loan offers, mitigate risks, and increase the likelihood of
          attracting funding from lenders on the Loan Market Loan Builder and Loan
          Marketplace platform.
        </p>
      </ContentWrapper>
    </>
  ),

  [Popup_Content.GOVPAD]: (
    <>
      <ContentWrapper>
        <p>
          LoanPad serves as the launchpad feature of Loan Market, leveraging its
          expertise to source exceptional deal flow for the community across the
          BNB Chain and expanding to additional chains where Loan Market's
          EVM-compatible application plans to be deployed. This initiative
          creates value for both projects and the community by mitigating sell
          pressure and fostering the growth of committed communities.
          Ultimately, LoanPad aims for a mutually beneficial outcome, enlarging
          diamond-handed communities and facilitating a win-win scenario for all
          stakeholders involved.
          <br />
          <br />
          Tier Membership Allocation Process:
          <br />
          <br />
          To maximize the most favorable allocations, members are incentivized
          to attain the highest tier level within the Loan Tier system. These
          top-tier memberships unlock exclusive privileges and benefits,
          providing members with enhanced access to premium opportunities on
          LoanPad as well as other utilities and rewards within the GOV
          ecosystem.
        </p>
      </ContentWrapper>
    </>
  ),

  [Popup_Content.FAIRLAUNCH]: (
    <>
      <ContentWrapper>
        <p>
          The Fairlaunch whitelist represents a distinct opportunity in the
          decentralized exchange landscape. By forking simple meme tokens and
          approving them as collateral on the loan marketplace, we introduce a
          unique mechanism to automatically alleviate sell pressure on
          fairlaunched anti-rug meme tokens. Through the implementation of the
          80/10/10 plan—where 80% of LP is locked and burned, 10% allocated for
          marketing initiatives prominently displayed on the forked website, and
          10% allocated to the developer fund—we ensure a transparent launch
          process where incentives are aligned. This approach not only protects
          the floor price but also reduces the likelihood of rug pulls on
          Loan Market forked popular memes. Additionally, it fosters increased
          utilization of Loan Market's loan builder and loan marketplace, thus
          enhancing the overall ecosystem's vibrancy and sustainability.
        </p>
        <h5>Tier Membership Allocation Process:</h5>

        <p>
          To maximize the most favorable allocations, members are incentivized
          to attain the highest tier level within the Loan Tier system. These
          top-tier memberships unlock exclusive privileges and benefits,
          providing members with enhanced access to premium opportunities on
          LoanPad as well as other utilities and rewards within the GOV
          ecosystem.
        </p>
      </ContentWrapper>
    </>
  ),
  [Popup_Content.TERMS_AND_CONDITIONS]: (
    <>
      <ContentWrapper>
        <p>
          The Loan Market Loan Builder and Loan Marketplace provide a seamless
          peer-to-peer lending platform for borrowers seeking to leverage their
          tokens or NFTs held in their Web3 wallets to secure stablecoin loans.
          Upon accessing the platform, borrowers connect their Web3 wallets and
          are assigned a tier level (Bronze, Silver, Gold, Platinum, or
          Rhodium), which determines their maximum loan-to-value (LTV) ratio.
          For instance, a Bronze tier holder with a 30% LTV can request up to
          30% of the collateral's USD value as a loan. Borrowers then utilize
          the Loan Builder and APY Arena to specify additional loan terms such
          as the annual percentage yield (APY) and loan duration. Once
          finalized, borrowers activate their loan offers to be displayed on the
          Loan Marketplace, where peer lenders can review and fund the offers
          based on factors such as risk-to-reward ratios, collateral, APY, and
          loan duration. Once funded, loans are governed by the terms chosen by
          the borrower during the loan creation process.
        </p>
        <ol>
          <h5>Terms and Conditions</h5>
          <li>
            {" "}
            Eligibility: Users must be of legal age and comply with relevant
            laws and regulations within their own region.
          </li>
          <li>
            Risk Disclosure:Borrowers and lenders acknowledge and understand the
            risks associated with token-backed and NFT-backed loans, including
            the potential for liquidation of collateral and loss of principal.
          </li>
          <li>
            Loan Terms: Borrowers are responsible for specifying loan terms
            including LTV, APY, and loan duration using the Loan Builder and APY
            Arena features. Lenders fund loans based on borrower-offered terms.
          </li>
          <li>
            Collateral Liquidation: For token-backed loans, liquidation occurs
            when the collateral's value falls to 125% of the loan amount. This
            setting can be voted on and changed by the Loan Market community. For
            NFT-backed loans, liquidation occurs if the borrower fails to repay
            the loan within the designated term length.
          </li>
          <li>
            {" "}
            Early Partial and Full Payback: Borrowers can mitigate risk by
            opting for early partial or full payback options if collateral value
            approaches the liquidation threshold. Early partial payback reduces
            the principal while maintaining original loan terms.
          </li>
          <li>
            AutoSell Feature: To help offer lesser risk to lenders, the platform
            offers an AutoSell feature for token-backed loans. This
            automatically sells collateral tokens on the decentralized exchange
            (DEX) to recover the loan amount plus interest, with a fee of 0.75%.
          </li>
          <li>
            Protection Reward Fund: A Protection Reward Fund is established from
            leftover tokens and stablecoins from liquidations, aiming to assist
            lenders in recovering losses beyond what can be recuperated through
            the AutoSell feature this fund is used to increase protection and
            can also be used to reward $GOV holders who are also lenders on the
            platform. The protection and reward payouts are voted on by the
            community.
          </li>
          <li>
            Platform Changes: Loan Market reserves the right to modify terms,
            features, and procedures based on community vote at any time and
            will notify users of such changes.
          </li>
          <li>
            Regulatory Compliance: Users are responsible for ensuring compliance
            with relevant laws and regulations in their jurisdiction.
          </li>
          <li>
            Risk of Hack and Market Fluctuation: Users acknowledge the inherent
            risks of potential hacking incidents and liquidation due to market
            fluctuations, which could lead loss of assets. While the platform
            has had an extensive audit completed by Hacken as seen here Hacken
            Audit Report. In order to mitigate these risks, users should
            exercise caution and remain vigilant.
          </li>
          <li>
            Security Protocol: Loan Market emphasizes that it will never request
            users' private keys or initiate direct messages (DMs) on Telegram or
            any other platform. Users are reminded to safeguard their private
            information and refrain from sharing it with anyone, including
            platform representatives.
          </li>
        </ol>
        <p>
          By agreeing, I acknowledge that I have read and agree to the terms and
          conditions outlined by Loan Market for using the Loan Builder and Loan
          Marketplace platform.
        </p>
      </ContentWrapper>
    </>
  ),
};
