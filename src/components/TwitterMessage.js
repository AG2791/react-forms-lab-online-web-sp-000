import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

handleChange
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.value} onChange ={this.handleChange}  />
           //connecet state to message
      </div>
    );
  }
}

export default TwitterMessage;
