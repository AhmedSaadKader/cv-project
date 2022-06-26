import React, { Component } from "react";
import EducationDisplayAndInput from "./EducationDisplay";
import styles from "./education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const inputStyle = styles.educationInput;
const displayStyle = styles.educationDiv;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationDivs: [],
    };
  }

  onOpen = () => {
    const Edu = () => <EducationDisplayAndInput />;
    this.setState({
      educationDivs: this.state.educationDivs.concat(Edu),
    });
  };

  render() {
    return (
      <div className={styles.educationDiv}>
        <div className={styles.educationHTitle}>
          <h1>Education</h1>{" "}
          <div>
            <button onClick={this.onOpen}>{addIcon}</button> <button>{deleteIcon}</button>
          </div>
        </div>
        <div>
          {this.state.educationDivs.map((item) => {
            const Displa = item;
            return <Displa />;
          })}
        </div>
      </div>
    );
  }
}

export default EducationalExperience;
