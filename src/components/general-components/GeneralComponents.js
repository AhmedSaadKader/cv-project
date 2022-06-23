import React, { Component } from "react";
import wrapperComponent from "../basicComponents/Wrapper";
import InputAndResult from "../basicComponents/InputAndResult";
import ProfessionalPhoto from "./ProfessionalPhoto";
import styles from "./general.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";

const inputStyle = styles.generalInput;
const displayStyle = styles.displayGeneralDiv;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const EmailComponent = wrapperComponent(InputAndResult, "email", checkIcon, editIcon, inputStyle, displayStyle);
const PhoneComponent = wrapperComponent(InputAndResult, "phoneNumber", checkIcon, editIcon, inputStyle, displayStyle);
const AddressComponent = wrapperComponent(InputAndResult, "address", checkIcon, editIcon, inputStyle, displayStyle);
const LinkedInComponent = wrapperComponent(
  InputAndResult,
  "linkedIn",
  checkIcon,
  editIcon,
  inputStyle,
  displayStyle,
  deleteIcon
);

class GeneralComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [{ link: LinkedInComponent, id: uniqid }],
    };
  }

  addLink = () => {
    if (this.state.links.length < 3) {
      const NewLink = wrapperComponent(
        InputAndResult,
        "link",
        checkIcon,
        editIcon,
        inputStyle,
        displayStyle,
        deleteIcon
      );
      const linkWithID = { link: NewLink, id: this.state.links.length };
      this.setState({
        links: this.state.links.concat(linkWithID),
      });
    }
  };

  deleteLink = () => {
    this.setState({
      links: this.state.links.slice(0, -1),
    });
  };

  render() {
    return (
      <div className={styles.generalInformation}>
        <fieldset>
          <ProfessionalPhoto />
          <div id="generalComponents">
            <EmailComponent />
            <PhoneComponent />
            <AddressComponent />
            <div>
              <h3 className={styles.onlineDiv}>
                Online
                <div>
                  <button onClick={this.addLink}>{addIcon}</button>
                  <button onClick={this.deleteLink}>{deleteIcon}</button>
                </div>
              </h3>
              {this.state.links.map((item) => {
                const A = item.link;
                return <A key={item.id} />;
              })}
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default GeneralComponents;
