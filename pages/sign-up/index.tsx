import SignUpProvider from "context/SignUpProvider";
import SignUpComponent from "views/SignUpComponent";

const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpComponent />
    </SignUpProvider>
  );
};

export default SignUp;
