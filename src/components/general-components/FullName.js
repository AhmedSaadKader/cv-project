import React, { Component } from "react";

class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      isEditable: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      fullName: e.target.value,
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
    const { fullName, isEditable } = this.state;
    const { element } = this.props;

    return (
      <div>
        {isEditable ? (
          <div>
            <input
              placeholder="Enter Full Name"
              value={fullName}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{element}</button>
          </div>
        ) : (
          <div onClick={this.editDiv}>
            {fullName ? fullName : "Your Name"}
            <button>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default FullName;
