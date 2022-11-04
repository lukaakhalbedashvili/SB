import React from "react";
import Styles from "./checkbox.module.scss";
import CheckedIcon from "public/checked.svg";
import NotCheckedIcon from "public/notChecked.svg";

interface Props {
  isChecked: boolean;
  handleCheckobChange?: () => void;
  id: string;
  name: string;
}
const Checkox = ({ isChecked, handleCheckobChange, name, id }: Props) => {
  return (
    <div className={Styles.checkboxMain} onClick={handleCheckobChange}>
      <input style={{ display: "none" }} name={name} id={id} />
      {isChecked && <CheckedIcon />}
      {!isChecked && <NotCheckedIcon />}
    </div>
  );
};

export default Checkox;
