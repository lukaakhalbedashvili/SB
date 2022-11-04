import { createContext, Dispatch } from "react";

interface SignUpContextTypes {
  isSignUpSuccessfull: boolean;
  setIsSignUpSuccessfull: Dispatch<boolean>;
}
export const signUpContext = createContext<SignUpContextTypes>({
  isSignUpSuccessfull: false,
  setIsSignUpSuccessfull: () => {
    //please ts
  },
});
