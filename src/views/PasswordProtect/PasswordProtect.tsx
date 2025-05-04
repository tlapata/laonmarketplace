import React, { useState } from "react";
import Input from "components/Input";
import styled from "styled-components";
import Button from "components/Button";
import { setPasswordBypass } from "state/app";
import { useDispatch } from "react-redux";

const PasswordProtect = ({ appPassword }) => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitPassword = () =>
    password === appPassword &&
    dispatch(setPasswordBypass({ hasPasswordBypassed: true }));

  return (
    <Wrapper>
      <Input
        sizeVariant="md"
        border="gradient"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        width="80px"
        height="40px"
        className="mt-3"
        onClick={submitPassword}
      >
        Submit
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 72px);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default PasswordProtect;
