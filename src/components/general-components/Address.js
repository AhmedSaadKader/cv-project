import React, { Component } from "react";
import styles from "./general.module.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isEditable: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      address: e.target.value,
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
    const { address, isEditable } = this.state;
    const { checkIcon, editIcon } = this.props;

    return (
      <div>
        {isEditable ? (
          <div className={styles.generalInput}>
            <input
              placeholder="Enter your address"
              value={address}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{checkIcon}</button>
          </div>
        ) : (
          <div className={styles.displayGeneralDiv} onClick={this.editDiv}>
            {address ? address : "Your Address"}
            <button>{editIcon}</button>
          </div>
        )}
      </div>
    );
  }
}

export default Address;
