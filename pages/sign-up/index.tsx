import SignUpComponent from "views/SignUpComponent";
import SignUpProvider from "./SignUpProvider";

const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpComponent />
    </SignUpProvider>
  );
};

export default SignUp;
