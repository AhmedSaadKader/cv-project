import React, { Component } from "react";

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      isEditable: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      phoneNumber: e.target.value,
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
    const { phoneNumber, isEditable } = this.state;
    const { element } = this.props;
    return (
      <div>
        {isEditable ? (
          <div>
            <input
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{element}</button>
          </div>
        ) : (
          <div onClick={this.editDiv}>
            {phoneNumber ? phoneNumber : "Phone Number"}
            <button>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default PhoneNumber;
