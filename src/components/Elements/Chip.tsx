import styled from "styled-components";

const ChipRoot = styled.div`
  position: relative;
  display: flex;
  height: max-content;
`;

const ChipLabel = styled.span`
  display: inline-block;
  text-align: center;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  padding: 8px 10px;
  min-width: 100px;
`;

const StyledChipClose = styled.button`
  position: absolute;
  top: 50%;
  width: 18px;
  height: 18px;
  right: -9px;
  transform: translateY(-50%);
  padding: 2px;
  background: rgba(255, 255, 255, 0.35);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { ChipRoot, ChipLabel, StyledChipClose as ChipClose };
