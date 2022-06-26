import React, { Component } from "react";
import styles from "./practical.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const inputStyle = styles.practicalInput;
const displayStyle = styles.practicalDisplay;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.practicalDiv}>
        <div className={styles.workHTitle}>
          <h1>Work Experience</h1>
          <div>
            {addIcon}
            {deleteIcon}
          </div>
        </div>
      </div>
    );
  }
}

export default PracticalExperience;
