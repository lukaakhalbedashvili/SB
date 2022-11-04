import { ReactNode, useState } from "react";
import { signUpContext } from "./signUpContext";

interface Props {
  children: ReactNode;
}
const SignUpProvider = ({ children }: Props) => {
  const [isSignUpSuccessfull, setIsSignUpSuccessfull] =
    useState<boolean>(false);
  const value = {
    isSignUpSuccessfull,
    setIsSignUpSuccessfull,
  };
  return (
    <signUpContext.Provider value={value}>{children}</signUpContext.Provider>
  );
};
export default SignUpProvider;
