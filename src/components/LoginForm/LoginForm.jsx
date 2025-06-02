import React from 'react';

class LoginForm extends React.Component {
    handleSubmit2 = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const login = form.elements.login.value;
      const password = form.elements.password.value;
    //   console.log(login, password);
      this.props.onSubmit({ login, password });
      form.reset();
    };
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="login" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      );
    }
  }

  export default LoginForm;