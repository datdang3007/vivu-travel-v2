import { SignUpContainer } from "src/components/SignUp";
import { AuthSignUpProvider } from "src/provider/register.provider";

export const SignUp = () => {
  return (
    <AuthSignUpProvider>
      <SignUpContainer />
    </AuthSignUpProvider>
  );
};
