import classNames from "classnames";
import { HTMLInputTypeAttribute } from "react";
import Styles from "./input.module.scss";
import CardNumberIcon from "public/cardNumber.svg";

interface Props {
  value: string;
  placeholder?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isCardNumberInput?: boolean;
}
const Input = ({
  value,
  placeholder,
  onChangeHandler,
  name,
  id,
  error,
  type,
  handleBlur,
  isCardNumberInput,
}: Props) => {
  return (
    <div className={Styles.inputMainWrapper}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={classNames(Styles.input, error && Styles.error)}
        onChange={onChangeHandler}
        onBlur={handleBlur}
      />
      {isCardNumberInput && (
        <CardNumberIcon className={Styles.cardNumberIcon} />
      )}
      {error && <p className={Styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
