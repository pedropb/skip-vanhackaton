import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import * as actions from '../actions/LoginActions';
import './Login.css';

class Login extends Component {
  // validation is being done by Bootstrap and HTML DOM
  handleSubmit(event) {
    if (this._email.checkValidity() && this._password.checkValidity()) {
      this.props.loginCustomer({
        email: this._email.value,
        password: this._password.value
      });

      event.preventDefault();
    }
  }

  render() {
    return (
      <form className="form-signin text-center">
        { this.props.authError && (
          <div class="alert alert-danger" role="alert">
            <strong>Authentication failed!</strong> {this.props.authError}
          </div>
        )}
        { this.props.authenticated && (
          <Redirect to="/stores" />
        )}
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref={input => this._email = input} required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref={input => this._password = input} required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit.bind(this)}>Sign in</button>
        </div>
    
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated, authError, waitingAuth } = state.auth;
  return { 
    authError,
    waitingAuth,
    authenticated
  };
}

export default connect(mapStateToProps, actions)(Login);