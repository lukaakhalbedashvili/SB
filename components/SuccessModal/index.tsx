import React from "react";
import Styles from "./successModal.module.scss";
import SuccessIcon from "public/successIcon.svg";
import SubmitBtn from "library/SubmitBtn";
const SuccessModal = () => {
  return (
    <div className={Styles.successModal}>
      <div className={Styles.checkIconWrapper}>
        <SuccessIcon />
      </div>
      <p className={Styles.thanksMessage}>Thanks for completing this form!</p>
      <p className={Styles.contact}>Contact your personal manager</p>
      <p className={Styles.supportContent}>
        Our 24/7 Onboarding Team are connecting your account now. Please check
        your Email for the next 15 mins.
      </p>
      <div className={Styles.submitBtnWrapper}>
        <SubmitBtn text="Contact Campaign manager" />
      </div>
    </div>
  );
};

export default SuccessModal;
