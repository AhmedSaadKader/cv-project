import React, { Component } from "react";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import Address from "./Address";
import ProfessionalPhoto from "./ProfessionalPhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./general.module.css";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: { text: "", isEditable: true },
      phoneNumber: { text: "", isEditable: true },
      address: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: { text: e.target.value, isEditable: true },
    });
  };

  handleKeyDown = (e) => {
    console.log(e.target.dataset.name);
    if (e.key === "Enter") {
      this.setState({
        [e.target.name]: { text: e.target.value, isEditable: false },
      });
    }
  };

  editDiv = (e) => {
    console.log(e.target.dataset.name);
    this.setState({
      [e.target.dataset.name]: { text: e.target.value, isEditable: true },
    });
  };

  confirmEntry = (e) => {
    console.log(e.target.dataset.name);

    this.setState({
      [e.target.dataset.name]: { text: e.target.value, isEditable: false },
    });
  };

  render() {
    const checkIcon = <FontAwesomeIcon icon={faCheck} />;
    const editIcon = <FontAwesomeIcon icon={faPen} />;
    return (
      <div className={styles.generalInformation}>
        <fieldset>
          <ProfessionalPhoto />
          <div>
            <Email
              checkIcon={checkIcon}
              editIcon={editIcon}
              handleChange={this.handleChange}
              handleKeyDown={this.handleKeyDown}
              editDiv={this.editDiv}
              confirmEntry={this.confirmEntry}
              email={this.state.email}
            />
            <PhoneNumber
              checkIcon={checkIcon}
              editIcon={editIcon}
              handleChange={this.handleChange}
              handleKeyDown={this.handleKeyDown}
              editDiv={this.editDiv}
              confirmEntry={this.confirmEntry}
              phoneNumber={this.state.phoneNumber}
            />
            <Address
              checkIcon={checkIcon}
              editIcon={editIcon}
              handleChange={this.handleChange}
              handleKeyDown={this.handleKeyDown}
              editDiv={this.editDiv}
              confirmEntry={this.confirmEntry}
              address={this.state.address}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default GeneralInformation;
