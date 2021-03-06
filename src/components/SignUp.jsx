import React, {Component} from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    }
}

signUp () {
    // console.log('this.state', this.state);
    const { email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('error', error);
            this.setState({error})
        })
}


render() {
    return (
      <div className="form-block" style={{margin: '10%'}}>
        <h2 style={{textDecoration: "underline black"}}>Sign Up (If you are new to the company!)</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: "5px", marginBotton: "20px"}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px', marginBottom: "10px"}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user, Sign In?</Link></div>
      </div>
    )
  }
}
export default SignUp;