import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

handleChange = e => {
  this.setState({
    value: e.target.value
    //target is the input
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.value} onChange ={this.handleChange}  />
           //connecet state to message, when input changes call handleChange
      </div>
    );
  }
}

export default TwitterMessage;
