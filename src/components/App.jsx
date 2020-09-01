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
                    
                    <AddGoal />
                    <hr/>
                    <h4>Goals</h4>
                    <GoalList />
                    <hr/>
                    <CompleteGoalList />
                    </div>
                )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return{}
}

export default connect(mapStateToProps, null)(App);