import { useState } from "react";
import Button from "components/Elements/Button";
import { UpdateEmail } from "utils/graphQueries/queries";
import { useMutation } from "@apollo/client";

const SkipBtn = ({ setOpen }) => {
  const [updateLoader, setUpdateLoader] = useState(false);
  const [updateEmail] = useMutation(UpdateEmail);

  const updateEmailAddress = async () => {
    setUpdateLoader(true);
    const { data } = await updateEmail({
      variables: {
        isSkiped: true,
        telegram: "",
      },
    });
    if (data) {
      localStorage.setItem("isSkiped", data.updateUser.isSkiped);
      setOpen(false);
      setUpdateLoader(false);
    }
  };
  return (
    <Button
      type="button"
      className="cancel-btn"
      onClick={updateEmailAddress}
      disabled={updateLoader}
    >
      {updateLoader ? "Loading..." : "Skip"}
    </Button>
  );
};

export default SkipBtn;
