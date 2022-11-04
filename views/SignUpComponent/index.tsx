import SignUpForm from "components/SignUpForm";
import CompanyLogo from "public/companyLogo.svg";
import React, { useContext, useState } from "react";
import CurrentStage from "../../library/CurrentStage";
import { SignUpPageStages } from "../../components/types";

import Styles from "./signUpComponent.module.scss";
import { signUpContext } from "pages/sign-up/signUpContext";
import SuccessModal from "components/SuccessModal";
const SignUpComponent = () => {
  const [activeStage, setActiveStage] = useState<SignUpPageStages>(
    SignUpPageStages.SIGNUP
  );
  const { isSignUpSuccessfull } = useContext(signUpContext);
  return (
    <>
      {!isSignUpSuccessfull && (
        <div className={Styles.signUpMain}>
          <CurrentStage activeStage={activeStage} />
          <div className={Styles.companyLogoWrapper}>
            <CompanyLogo />
          </div>
          <SignUpForm />
        </div>
      )}
      {isSignUpSuccessfull && <SuccessModal />}
    </>
  );
};

export default SignUpComponent;
