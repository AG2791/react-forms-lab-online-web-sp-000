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
    //target is the input element value
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.value} onChange ={this.handleChange}  />
                    {/* connecets state to message, when input changes call handleChange */}
                    <P> {this.props.maxChars-this.state.value.length}</p>
                    takes in the prop of 
      </div>
    );
  }
}

export default TwitterMessage;
