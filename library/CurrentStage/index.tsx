import React from "react";
import { SignUpPageStages } from "../../components/types";
import Styles from "./cureentStage.module.scss";
import ActiveStageBall from "public/activeStageBall.svg";
import Line from "public/line.svg";
import classNames from "classnames";

interface Props {
  activeStage: SignUpPageStages;
}

const CurrentStage = ({ activeStage }: Props) => {
  return (
    <div className={Styles.currentStageMain}>
      <Line className={Styles.line} />
      <ActiveStageBall
        className={classNames(
          Styles.activeStageBall,
          activeStage === SignUpPageStages.SIGNUP && Styles.active
        )}
      />
      <ActiveStageBall
        className={classNames(
          Styles.activeStageBall,
          activeStage === SignUpPageStages.TARGETING && Styles.active
        )}
      />
    </div>
  );
};

export default CurrentStage;
