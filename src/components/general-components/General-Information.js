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
  render() {
    const checkIcon = <FontAwesomeIcon icon={faCheck} />;
    const editIcon = <FontAwesomeIcon icon={faPen} />;
    return (
      <div className={styles.generalInformation}>
        <fieldset>
          <ProfessionalPhoto />
          <div>
            <Email checkIcon={checkIcon} editIcon={editIcon} />
            <PhoneNumber checkIcon={checkIcon} editIcon={editIcon} />
            <Address checkIcon={checkIcon} editIcon={editIcon} />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default GeneralInformation;
