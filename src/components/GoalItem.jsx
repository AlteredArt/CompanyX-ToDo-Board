import React, {Component} from 'react';
import {completeGoalRef, goalRef} from '../firebase';
import {connect} from 'react-redux';


class GoalItem extends Component {
completeGoal(){
    // add to complete goals on database
    // remove this goal from the goals list
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        goalRef.child(serverKey).remove();
        // console.log('emial', email, 'title', title);
        completeGoalRef.push({email, title})
}


    render() {
        // console.log('this.props.goal', this.props.goal)

        const {email, title} = this.props.goal;
        return (
            <div stlye={{margin: "5px"}}>
                <strong style={{color: 'red'}}>{title}</strong>
                <span> submitted by: <em style={{color: 'orange'}}>{email}</em></span>
                <button className="btn btn-sm btn-success" style={{margin: '15px'}} onClick={() => this.completeGoal()}
                >Done</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user}
}

export default connect(mapStateToProps, null)(GoalItem);