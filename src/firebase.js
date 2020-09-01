import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPNEvubgxrZ0BSazDKqxIxNqBYz3_ItdM",
    authDomain: "companyx-todo-board.firebaseapp.com",
    databaseURL: "https://companyx-todo-board.firebaseio.com",
    projectId: "companyx-todo-board",
    storageBucket: "companyx-todo-board.appspot.com",
    messagingSenderId: "784034461222",
    appId: "1:784034461222:web:01bdce5d1135dc25f298e7"
  };


  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
