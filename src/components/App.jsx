import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import NavBar from './NavBar';

class App extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <hr/>
                <AddGoal />
                <hr/>
                <h4>Goals to complete.</h4>
                <GoalList />
                <hr/>
                <h4>List of completed goals.</h4>
                <CompleteGoalList />
            </div>
                )
            }
        }

function mapStateToProps(state) {
    return{}
}

export default connect(mapStateToProps, null)(App);