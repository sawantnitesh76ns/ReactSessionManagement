import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import Input from './Input';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: '',
        password: ''
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    const { user } = this.state;
    const { login } = this.props.actions;
    login(user);
  }

  onChange(e) {
    const { value, name } = e.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  }

  render() {
    const { user: { email, password } } = this.state;

    return (
      <div>
        <h3>LOGIN</h3>
        <Input
          name="email"
          value={email}
          label="Email"
          type="email"
          onChange={this.onChange}
        />
        <Input
          name="password"
          value={password}
          label="Password"
          type="password"
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit} type="submit">Submit</button>
      </div>
    );
  }
}

const { object } = PropTypes;

Login.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(Login);
