import React from "react";
import Styles from "./submitBtn.module.scss";

interface Props {
  text: string;
  onClickhandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const SubmitBtn = ({ text, onClickhandler }: Props) => {
  return (
    <button
      className={Styles.submitBtn}
      type="submit"
      onClick={(e) => onClickhandler && onClickhandler(e)}
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
