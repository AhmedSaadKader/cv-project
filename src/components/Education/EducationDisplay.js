import React, { Component } from "react";
import styles from "./education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const editButton = <FontAwesomeIcon icon={faPenToSquare} />;

class EducationDisplayAndInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDivs: [],
    };
  }

  openModal = () => {
    document.getElementById("favDialog").showModal();
  };

  deleteExp = () => {
    this.setState({
      displayDivs: [],
    });
    console.log(this.state.displayDivs);
  };

  createExperience = (e) => {
    const EducationDisplay = () => (
      <div className={styles.eduDisplayFlex}>
        <div className={styles.educationDisplayDiv}>
          <div>
            {e.target.elements.fromDate.value} --- {e.target.elements.toDate.value}
          </div>
          <div>{e.target.elements.school.value}</div>
          <div>{e.target.elements.degree.value}</div>
          <div>GPA:{e.target.elements.GPA.value}</div>
        </div>
        <div>
          <div>
            <button onClick={this.openModal}>{editButton}</button>
            <button onClick={this.deleteExp}>{deleteIcon}</button>
          </div>
        </div>
      </div>
    );

    this.setState({
      displayDivs: [EducationDisplay],
    });
  };

  render() {
    console.log("r");
    return (
      <div>
        <dialog id="favDialog" open>
          <form method="dialog" className={styles.dialogForm} id="dialogForm" onSubmit={this.createExperience}>
            <label>
              from
              <input type="month" name="fromDate"></input>
            </label>
            <label>
              to
              <input type="month" name="toDate"></input>
            </label>
            <label>
              School
              <input placeholder="" name="school"></input>
            </label>
            <label>
              Degree
              <input placeholder="" name="degree"></input>
            </label>
            <label>
              GPA
              <input placeholder="" name="GPA"></input>
            </label>
            <button type="Submit">OK</button>
          </form>
        </dialog>
        {this.state.displayDivs.map((div) => {
          const Div = div;
          console.log(Div);
          return <Div />;
        })}
      </div>
    );
  }
}

export default EducationDisplayAndInput;
