import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useCallback, useState } from "react";
import {
  InputEmail,
  InputPassword,
  InputProfile,
} from "../../components/UserRegister";

export const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmail = useCallback((email: string) => {
    setUserEmail(email);
  }, []);

  const handlePassword = useCallback((password: string) => {
    setUserPassword(password);
  }, []);

  return (
    <Body>
      {userEmail === "" && <InputEmail handleEmail={handleEmail} />}
      {userEmail !== "" && userPassword === "" && (
        <InputPassword userEmail={userEmail} handlePassword={handlePassword} />
      )}
      {userEmail !== "" && userPassword !== "" && (
        <InputProfile userEmail={userEmail} userPassword={userPassword} />
      )}
    </Body>
  );
};

const Body = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});
