import { useState } from "react";
import Button from "components/Elements/Button";
import { UpdateEmail } from "utils/graphQueries/queries";
import { useMutation } from "@apollo/client";
import { showToast } from "utils/popup";

const SubmitBtn = ({ emailAddress, setOpen }) => {
  const [updateLoader, setUpdateLoader] = useState(false);
  const [updateEmail] = useMutation(UpdateEmail);
  const emailValidator = (val: string) => {
    // eslint-disable-next-line no-useless-escape
    let regEmail =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (val !== "" && !regEmail.test(val)) {
      return false;
    }
    return true;
  };

  const updateEmailAddress = async () => {

    const checkEmail = emailValidator(emailAddress);
    if (!checkEmail) {
      showToast("Invalid Email", "error");

      return;
    }
    setUpdateLoader(true);
    let variables;
    if (emailAddress === "") {
      variables = {
        telegram: ""
      }
    } else {
      variables = {
        email: emailAddress,
        telegram: "",
      }
    }
    const { data } = await updateEmail({
      variables
    });
    setUpdateLoader(false);
    if (data) {
      localStorage.setItem("email", data?.updateUser?.email);
      showToast("Email Updated Successfully", "success");
      setOpen(false);
    }
  };
  return (
    <Button
      type="button"
      className="cancel-btn"
      onClick={updateEmailAddress}
      disabled={updateLoader}
    >
      {updateLoader ? "Saving..." : "Save"}
    </Button>
  );
};

export default SubmitBtn;
