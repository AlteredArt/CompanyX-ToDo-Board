import React from 'react';
import {firebaseApp} from '../firebase';

class NavBar extends React.Component{
  
    signOut(){
        firebaseApp.auth().signOut();
    }


    render(){
        return(
            <div>
                <div className="form-inline">
                <h1>Welcome User!</h1>
                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign Out</button>
                </div>
                
            </div>
        )
    }
}

export default NavBar;