import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: ``,
      password: ``
    };
  }

  submitHandler = e => {
    const username = this.state.username
    const password = this.state.password

    e.preventDefault()

    if (username && password) {
      this.props.handleLogin(username, password)
    } else {
      alert(`Please enter username and password`)
    }
  }

  usernameChangeHandler = e => {
    const input = e.target.value
    this.setState({
      username: input
    })
  }

  passwordChangeHandler = e => {
    const input = e.target.value
    this.setState({
      password: input
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.usernameChangeHandler(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.passwordChangeHandler(e)}/>
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
