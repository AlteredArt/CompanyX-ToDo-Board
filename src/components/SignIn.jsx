import React, {Component} from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
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

signIn () {
    console.log('this.state', this.state);
    const { email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('error', error);
            this.setState({error})
        })
}


render() {
    return (
      <div className="form-block" style={{margin: '10%'}}>
        <h2 style={{textDecoration: "underline black"}}>Sign In to get your day Started!</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px', marginBottom: "10px"}}
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
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
      <div><Link to={'/signup'}>Sign up instead?</Link></div>
      </div>
    )
  }
}
export default SignIn;