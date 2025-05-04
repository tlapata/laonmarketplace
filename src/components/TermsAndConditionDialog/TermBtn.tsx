import {  useState } from "react";
import Button from "components/Elements/Button";
import { UpdateEmail } from "utils/graphQueries/queries";
import { useMutation } from "@apollo/client";
import { Checkbox, CheckboxIndicator } from "components/Form/Checkbox";
import { FiCheck } from "react-icons/fi";

import styled from "styled-components";
import { useModal } from "state/hooks";

const TermBtn = ({emailAddress, termsAndConditions, setOpen }) => {
  const [updateLoader, setUpdateLoader] = useState(false);
  const [updateEmail] = useMutation(UpdateEmail);
  const { setAlert } = useModal();
  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);
  };
   const updateTermsAndCondition = async () => {
    setUpdateLoader(true);
    let variables;
    if (emailAddress === "") {
      variables = {
        telegram: "",
        isTermSkiped: true,
      }
    } else {
      variables = {
        email: emailAddress,
        telegram: "",
        isTermSkiped: true,
    }
    }
    
    const { data } = await updateEmail({
      variables,
    });
    setUpdateLoader(false);
    if (data) {
      localStorage.setItem("isTermSkiped", data?.updateUser?.isTermSkiped);
      localStorage.setItem("email", data?.updateUser?.email);
      showToast("Terms Accepted Successfully", "success");
      setOpen(false);
    }
  };
  const updateTerms = async () => {
    setUpdateLoader(true);
    const { data } = await updateEmail({
      variables: {
        isTermSkiped: true,
        telegram: "",
      },
    });
    if (data) {
      localStorage.setItem("isTermSkiped", data.updateUser.isTermSkiped);
      setOpen(false);
      setUpdateLoader(false);
    }
  };
  return (
  
    <>
      {updateLoader ?
      <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
          <Button>Loading....</Button>
      </div>
     : 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h5 style={{ margin: 0 }}>Agree and continue to create loan offer</h5>
        <div>
          <ButtonGroup>
            <Button
              type="button"
              className="cancel-btn"
              onClick={updateTermsAndCondition}
              disabled={updateLoader}
            >
              Save
            </Button>
            <Button
              type="button"
              className="cancel-btn"
              onClick={updateTerms}
              disabled={updateLoader}
            >
            Skip
            </Button>
          </ButtonGroup>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={updateTerms}
        >
          <Checkbox>
            <CheckboxIndicator>
              <FiCheck />
            </CheckboxIndicator>
          </Checkbox>
          Don’t show this again for this wallet
        </div>
      </div>
      }
      
    </>
  );
};

const ButtonGroup = styled.div`
  text-align: center;
  // margin-top: 30px;
  .cancel-btn {
    min-width: 130px;
    margin: 0 20px;
  }
`;

export default TermBtn;
