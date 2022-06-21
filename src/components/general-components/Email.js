import React, { Component } from "react";
import styles from "./general.module.css";

class Email extends Component {
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
      email,
    } = this.props;

    console.log(this.props);

    return (
      <div>
        {email.isEditable ? (
          <div className={styles.generalInput}>
            <input
              name="email"
              placeholder="Email"
              value={email.text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            ></input>
            <button onClick={confirmEntry} data-name="email">
              {checkIcon}
            </button>
          </div>
        ) : (
          <div
            className={styles.displayGeneralDiv}
            onClick={editDiv}
            data-name="email"
          >
            {email.text ? email.text : "Email"}
            <button data-name="email" onClick={editDiv}>
              {editIcon}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Email;
