import React, { Component } from "react";

class InputAndResult extends Component {
  constructor(props) {
    super(props);
    const dataName = props.name;
    this.state = {
      [dataName]: "",
      isEditable: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [this.props.name]: e.target.value,
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
    const { isEditable } = this.state;
    const { name, checkIcon, editIcon, inputStyle, displayStyle, inputType } = this.props;
    const data = this.props.name;

    return (
      <div>
        {isEditable ? (
          <div className={inputStyle}>
            <input
              type={inputType}
              placeholder={name}
              value={this.state[data]}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
            <button onClick={this.confirmEntry}>{checkIcon}</button>
          </div>
        ) : (
          <div className={displayStyle} onClick={this.editDiv}>
            {this.state[data] ? this.state[data] : name}
            <div>
              <button>{editIcon}</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InputAndResult;
