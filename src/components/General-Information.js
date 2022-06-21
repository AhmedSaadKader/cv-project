import React, { Component } from "react";
import PhoneNumber from "./general-components/PhoneNumber";
import Email from "./general-components/Email";
import FullName from "./general-components/FullName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class GeneralInformation extends Component {
  render() {
    const element = <FontAwesomeIcon icon={faCheck} />;
    return (
      <div>
        <fieldset>
          <legend>General Information</legend>
          <FullName element={element} />
          <Email element={element} />
          <PhoneNumber element={element} />
        </fieldset>
      </div>
    );
  }
}

export default GeneralInformation;
