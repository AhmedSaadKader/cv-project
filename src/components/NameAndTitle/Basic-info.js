import React, { Component } from "react";
import InputAndResult from "../basicComponents/InputAndResult";
import wrapperComponent from "../basicComponents/Wrapper";
import styles from "./basicInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const inputNameStyle = styles.basicNameInput;
const inputTitleStyle = styles.basicTitleInput;
const displayNameStyle = styles.displayNameDiv;
const displayTitleStyle = styles.displayTitleDiv;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;

const FullNameComponent = wrapperComponent(
  InputAndResult,
  "FullName",
  checkIcon,
  editIcon,
  inputNameStyle,
  displayNameStyle
);

const TitleComponent = wrapperComponent(
  InputAndResult,
  "Title",
  checkIcon,
  editIcon,
  inputTitleStyle,
  displayTitleStyle
);

class BasicInfo extends Component {
  render() {
    return (
      <div className={styles.basicInformation}>
        <FullNameComponent />
        <TitleComponent />
      </div>
    );
  }
}

export default BasicInfo;
