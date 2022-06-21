import React, { Component } from "react";
import styles from "./general.module.css";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEditable: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({
        isEditable: false,
      });
    }
  };

  editDiv = (e) => {
    this.setState({
      isEditable: true,
    });
  };

  confirmEntry = (e) => {
    this.setState({
      isEditable: false,
    });
  };

  render() {
    const { email, isEditable } = this.state;
    const { checkIcon, editIcon } = this.props;

    return (
      <div>
        {isEditable ? (
          <div className={styles.generalInput}>
            <input
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{checkIcon}</button>
          </div>
        ) : (
          <div className={styles.displayGeneralDiv} onClick={this.editDiv}>
            {email ? email : "Email"}
            <button>{editIcon}</button>
          </div>
        )}
      </div>
    );
  }
}

export default Email;
