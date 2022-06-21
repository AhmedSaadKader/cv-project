import React, { Component } from "react";

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
    const { element } = this.props;

    return (
      <div>
        {isEditable ? (
          <div>
            <input
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{element}</button>
          </div>
        ) : (
          <div onClick={this.editDiv}>
            {email ? email : "Email"}
            <button>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Email;
