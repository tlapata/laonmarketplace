import styled from "styled-components";
export const UploadText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 65.64px;

  span {
    font-weight: 800;
    text-align: center;
    margin-bottom: 2px;
    width: max-content;
  }

  svg {
    margin-bottom: 11px;
  }
`;

export const ButtonHolder = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 30.33px;

  .highlight {
    color: ${({ theme }) => theme.colors.textAccent};
  }

  .cancel {
    :hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const LineBreak = styled.div`
  width: 703px;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0) 1.97%,
    #c4c4c4 58.63%,
    rgba(196, 196, 196, 0) 99.98%
  );
`;

export const DialogBody = styled.div`
  margin-top: 3px;
  width: 703px;
  height: 315px;
  display: flex;
`;

export const GradientText = styled.span`
  color: ${({ theme }) => theme.colors.textAccent};
`;

export const LeftContent = styled.div`
  width: 466px;
  height: 315px;
`;

export const RightContent = styled.div`
  width: 234px;
  height: 315px;
  padding-left: 48px;
  padding-top: 35px;
`;

export const LeftListBox = styled.div`
  width: auto;
  padding-top: 35px;
  height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftListItem = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
  }
  svg {
    width: 29px;
    height: auto;
    margin-right: 12px;
  }
  .link {
    margin-right: 6px;
  }
`;

export const MembershipListItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9px;
  span {
    font-weight: 500;
    font-size: 12px;
  }
  svg {
    width: 25px;
    height: auto;
    margin-right: 9px;
  }
`;

export const VerticalLineBreakLg = styled.div`
  width: 3px;
  height: 315px;
  background: linear-gradient(
    0deg,
    rgba(196, 196, 196, 0) 1.97%,
    #c4c4c4 58.63%,
    rgba(196, 196, 196, 0) 99.98%
  );
`;

export const VerticalLineBreakSm = styled.div`
  margin-left: 10px;
  height: 101px;
  width: 3px;
  background: linear-gradient(
    0deg,
    rgba(196, 196, 196, 0) 1.97%,
    #c4c4c4 58.63%,
    rgba(196, 196, 196, 0) 99.98%
  );
`;

export const CopyBox = styled.div`
  width: 444px;
  height: 40px;
  border-radius: 3.62966px;
  border: 0.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  .copy-content {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    svg {
      margin-left: 8.46px;
    }
  }
`;

export const TierText = styled.span`
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
`;

export const TierSection = styled.div`
  display: flex;
  margin-top: 13px;
  margin-bottom: 10px;
  align-items: center;
`;

export const TierHolder = styled(TierText)`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  svg {
    margin-right: 9px;
  }
  .hidden {
    visibility: hidden;
  }
`;

export const PlainTier = styled.span`
  font-weight: 500;
  display: block;
  margin-left: 13px;
`;

export const PlatinumText = styled(TierText)`
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
`;

export const GoldText = styled(TierText)`
  background: linear-gradient(
      90deg,
      #fdfbea 0%,
      #e4de58 26.93%,
      #feffd0 69.03%,
      #e1e458 99.41%
    ),
    linear-gradient(
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
`;

export const SilverText = styled(TierText)`
  background: linear-gradient(
      90deg,
      #ffffff 0%,
      #999999 26.93%,
      #ffffff 69.03%,
      #7e7e7e 99.41%
    ),
    linear-gradient(
      90deg,
      #fdfbea 0%,
      #e4de58 26.93%,
      #feffd0 69.03%,
      #e1e458 99.41%
    ),
    linear-gradient(
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
`;

export const BronzeText = styled(TierText)`
  background: linear-gradient(
      90deg,
      #ffecd7 0%,
      #956c3b 26.93%,
      #fff0de 69.03%,
      #c29056 99.41%
    ),
    linear-gradient(
      90deg,
      #ffffff 0%,
      #999999 26.93%,
      #ffffff 69.03%,
      #7e7e7e 99.41%
    ),
    linear-gradient(
      90deg,
      #fdfbea 0%,
      #e4de58 26.93%,
      #feffd0 69.03%,
      #e1e458 99.41%
    ),
    linear-gradient(
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
`;
