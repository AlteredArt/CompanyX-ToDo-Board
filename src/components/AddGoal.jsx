import React, {Component} from 'react'
import {goalRef} from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends Component {
constructor(props) {
    super(props);
        this.state = {
            title: '',
            curTime : new Date().toLocaleString(),
        }
}

addGoal(){
    console.log('this', this);
    const {title} = this.state;
    const {email} = this.props.user;

    goalRef.push({email, title})
}


// getTime() {
//     return new Date()

// }


    render(){
        return(
        <div className="form-block">
            <div className="form-group">
            <h3>CompanyXs' goals to complete today!</h3>
            <p className="ml-5 today">Todays Date: {this.state.curTime}</p>
                <input
                    type="text"
                    placeholder="Add A Goal"
                    className="form-control"
                    style={{marginRight: "5px"}}
                    onChange={event => this.setState({title: event.target.value})}
                />
                <button
                className="btn btn-success mt-3"
                type="button"
                onClick={() => this.addGoal()}
                > Submit
                </button>
            </div>
        </div>
        )
    }
}

function mapStatetoProps(state) {
    const {user} = state;
    return {
        user
    }
}

export default connect(mapStatetoProps, null)(AddGoal);