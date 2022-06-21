import React, { Component } from "react";
import styles from "./general.module.css";

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      checkIcon,
      editIcon,
      handleChange,
      handleKeyDown,
      editDiv,
      confirmEntry,
      phoneNumber,
    } = this.props;

    return (
      <div>
        {phoneNumber.isEditable ? (
          <div className={styles.generalInput}>
            <input
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber.text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            ></input>
            <button onClick={confirmEntry} data-name="phoneNumber">
              {checkIcon}
            </button>
          </div>
        ) : (
          <div
            className={styles.displayGeneralDiv}
            onClick={editDiv}
            data-name="phoneNumber"
          >
            {phoneNumber.text ? phoneNumber.text : "Phone Number"}
            <button onClick={editDiv} data-name="phoneNumber">
              {editIcon}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default PhoneNumber;
