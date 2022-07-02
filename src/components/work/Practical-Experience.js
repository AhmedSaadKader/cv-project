import React, { useState } from "react";
import styles from "./practical.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PracticalDisplayAndInput from "./PracticalDisplayAndInput";

const inputStyle = styles.practicalInput;
const displayStyle = styles.practicalDisplay;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const PracticalExperience = (props) => {
  const [workDiv, setWorkdiv] = useState([]);

  const addWork = () => {
    console.log(workDiv);
    const Work = () => <PracticalDisplayAndInput />;
    setWorkdiv(workDiv.concat(Work));
  };

  return (
    <div className={styles.practicalDiv}>
      <div className={styles.workHTitle}>
        <h1>Work Experience</h1>
        <div>
          <button onClick={addWork}>{addIcon}</button>
        </div>
      </div>
      <div>
        <div>
          {workDiv.map((item) => {
            const Displa = item;
            return <Displa />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticalExperience;
