import {combineReducers} from 'redux';
import user from './reducer_user';
import completeGoals from './reducer_completed_goals'
import goals from './reducer_goals.js';

export default combineReducers({
    user,
    goals,
    completeGoals

})