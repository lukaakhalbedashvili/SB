import Checkox from "library/Checkox";
import Input from "library/Input";
import SubmitBtn from "library/SubmitBtn";
import { signUpContext } from "context/signUpContext";
import { useContext } from "react";
import Styles from "./signUpForm.module.scss";
import useSignUpForm from "./useSignUpForm";

const SignUpForm = () => {
  const { formik, handleCheckobChange, isCheckboxChecked, isSubmitted, form } =
    useSignUpForm();

  return (
    <div className={Styles.signUpFormMain}>
      <div className={Styles.pricing}>
        <div className={Styles.plan}>
          <p>Premium</p>
          <p>Faster Instagram Growth</p>
        </div>
        <div className={Styles.planPrice}>
          <p>$199/month</p>
        </div>
      </div>
      <form
        className={Styles.signUpForm}
        ref={form}
        onSubmit={formik.handleSubmit}
      >
        <div className={Styles.emailInputWrapper}>
          <Input
            onChangeHandler={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email ? formik.errors.email : ""}
            id="email"
            name="email"
            placeholder="email"
            type="email"
            handleBlur={formik.handleBlur}
          />
        </div>
        <div className={Styles.cardHolderWrapper}>
          <Input
            onChangeHandler={formik.handleChange}
            value={formik.values.cardHolder}
            error={formik.touched.cardHolder ? formik.errors.cardHolder : ""}
            id="cardHolder"
            name="cardHolder"
            placeholder="Cardholder Name"
            type="text"
            handleBlur={formik.handleBlur}
          />
        </div>
        <div className={Styles.cardNumberWrapper}>
          <Input
            onChangeHandler={formik.handleChange}
            value={formik.values.cardNumber}
            error={formik.touched.cardNumber ? formik.errors.cardNumber : ""}
            id="cardNumber"
            name="cardNumber"
            placeholder="Card Number"
            type="number"
            handleBlur={formik.handleBlur}
            isCardNumberInput={true}
          />
        </div>
        <div className={Styles.dateAndCVVWrapper}>
          <div className={Styles.dateWrapper}>
            <Input
              onChangeHandler={formik.handleChange}
              value={formik.values.cardDate}
              error={formik.touched.cardDate ? formik.errors.cardDate : ""}
              id="cardDate"
              name="cardDate"
              placeholder="Date"
              type="date"
              handleBlur={formik.handleBlur}
            />
          </div>
          <div className={Styles.cvvWrapper}>
            <Input
              onChangeHandler={formik.handleChange}
              value={formik.values.cardCVV}
              error={formik.touched.cardDate ? formik.errors.cardCVV : ""}
              id="cardCVV"
              name="cardCVV"
              placeholder="CVV"
              type="number"
              handleBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div className={Styles.countryAndZipWrapper}>
          <div className={Styles.countryWrapper}>
            <Input
              onChangeHandler={formik.handleChange}
              value={formik.values.country}
              error={formik.touched.country ? formik.errors.country : ""}
              id="country"
              name="country"
              placeholder="Country"
              type="text"
              handleBlur={formik.handleBlur}
            />
          </div>
          <div className={Styles.zipWrapper}>
            <Input
              onChangeHandler={formik.handleChange}
              value={formik.values.zip}
              error={formik.touched.zip ? formik.errors.zip : ""}
              id="zip"
              name="zip"
              placeholder="Zip"
              type="number"
              handleBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div className={Styles.cardNumberWrapper}>
          <Input
            onChangeHandler={formik.handleChange}
            value={formik.values.discountCode}
            error={
              formik.touched.discountCode ? formik.errors.discountCode : ""
            }
            id="discountCode"
            name="discountCode"
            placeholder="Discount Code"
            type="number"
            handleBlur={formik.handleBlur}
          />
        </div>
        <div className={Styles.termsAndStuff}>
          <div className={Styles.termsAndStuffContent}>
            <div className={Styles.checkboxWrapper}>
              <Checkox
                id="checkbox"
                name="checkbox"
                isChecked={isCheckboxChecked}
                handleCheckobChange={handleCheckobChange}
              />
            </div>
            <p>I accept the</p>
            <a>Terms of Service </a>
            <p>and</p>
            <a> Privacy Policy</a>
          </div>
          {formik.errors.checkbox && (
            <p className={Styles.errorMessage}>
              You must accept the Terms and Policy
            </p>
          )}
        </div>
        <div className={Styles.submitBtnWrapper}>
          <div className={Styles.submitBtn}>
            <SubmitBtn
              text="Get started    $199  $249"
              onClickhandler={formik.submitForm}
            />
          </div>
        </div>

        <div className={Styles.couponWrapper}>
          <p>Have a coupon?</p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
