import React from 'react';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from'../actions';


class CompleteGoalList extends React.Component {

    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title})
            })
            // console.log('completeGoals', completeGoals);
            this.props.setCompleted(completeGoals);
        })
    }

    clearCompleted() {
        completeGoalRef.set([]);
    }


    render() {
        return (
          <div>
            {
              this.props.completeGoals.map((completeGoal, index) => {
                const { title, email } = completeGoal;
                return (
                  <div key={index} className="mt-4 mb-4">
                    <strong style={{color: 'green'}}>{title}</strong> <span>completed by: </span> <em style={{color: 'blue'}}>{email}</em>
                  </div>
                )
              })
            }
            <button className="btn btn-danger" onClick={() => this.clearCompleted()}
              >Clear All!</button>
          </div>
        )
      }
    }


function mapStateToProps(state) {
    const {completeGoals} = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);