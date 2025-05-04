import styled from "styled-components";
import MaxLoanBg from "assets/images/maxloanModalbg.png";
export interface props {
  maxLoanAmount: string;
  tierLevel: string;
  ltv: number;
}
const MaxLoanModal = ({ maxLoanAmount, tierLevel, ltv }: props) => {
  return (
    <LoanModal>
      <div style={{ padding: "21px 24px 36px 0" }}>
        <GradientText>MAX LOAN AMT:</GradientText>
        <LoanAmount>$ {maxLoanAmount}</LoanAmount>
        <List>
          <li>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>You are a </span>{" "}
              <TierText>
                {" "}
                <span
                  style={{ textTransform: "uppercase" }}
                  className={tierLevel}
                >
                  {tierLevel} TIER MEMBER
                </span>
              </TierText>
            </div>
          </li>
          <li style={{ marginTop: 5 }}>
            Max Loan to Value (LTV) is {ltv.toFixed()}%
          </li>
        </List>
      </div>
    </LoanModal>
  );
};
export const TierText = styled.span`
  font-weight: 600;

  font-size: 13px;

  line-height: 115%;

  display: flex;

  align-items: center;

  .AllStar {
    background: linear-gradient(0deg, #90ffd2, #90ffd2),
      linear-gradient(90deg, #f1c6ff -3.79%, #e084ff 44.81%, #8da3ff 64.43%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Platinum {
    background: linear-gradient(
      90deg,
      rgb(234, 250, 253) 0%,
      rgb(88, 228, 220) 26.93%,
      rgb(208, 246, 255) 69.03%,
      rgb(88, 228, 220) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Silver {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(153, 153, 153) 26.93%,
      rgb(255, 255, 255) 69.03%,
      rgb(126, 126, 126) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Bronze {
    background: linear-gradient(
      90deg,
      rgb(255, 236, 215) 0%,
      rgb(149, 108, 59) 26.93%,
      rgb(255, 240, 222) 69.03%,
      rgb(194, 144, 86) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Gold {
    background-image: linear-gradient(
      90deg,
      #ffefc6 0%,
      #ffce20 26.93%,
      #ffefc6 69.03%,
      #ffce20 99.41%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const List = styled.ul`
  font-weight: 500;
  padding-left: 15px;
  color: #ffffff;
  li .span {
    font-weight: 600;
    font-size: 13px;
    line-height: 115%;
    display: flex;
    align-items: center;

    background: linear-gradient(
        90deg,
        #eafafd 0%,
        #58e4dc 26.93%,
        #d0f6ff 69.03%,
        #58e4dc 99.41%
      ),
      #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const LoanAmount = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #6ad050;
  margin-top: 9px;
  margin-bottom: 10px;
`;

const GradientText = styled.span`
  color: ${({ theme }) => theme.colors.textAccent};
`;

const LoanModal = styled.div`
  background-image: url(${MaxLoanBg});
  font-weight: 700;
  font-size: 14.504px;
  background-repeat: no-repeat;
  flex-direction: column;
  position: absolute;
  display: flex;
  min-width: 321px;
  align-items: center;
  justify-content: center;
  bottom: 50px;
  left: -18px;
  background-size: contain;
`;

export default MaxLoanModal;
