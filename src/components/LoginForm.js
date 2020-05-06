import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      this.state = {
        Username:'',
        Password:''
      }
    };
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value = {this.state.username} onChange = this.handleChangle />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
