import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBap8AJklJ8tj_qS8bSebgu0aNBXA2mMUY",
    authDomain: "expensify-f3539.firebaseapp.com",
    databaseURL: "https://expensify-f3539.firebaseio.com",
    projectId: "expensify-f3539",
    storageBucket: "expensify-f3539.appspot.com",
    messagingSenderId: "281051521931",
    appId: "1:281051521931:web:5c41e25706b3e779e2058e",
    measurementId: "G-5GMK8MPJWJ"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Courtney Alexander',
    age: 18,
    isSingle: true,
    location: {
        city: 'Soweto',
        country: 'South Africa'
    }
});

database.ref('age').set(19);
database.ref('location/city').set('Johanesburg');

database.ref('attributes').set({
    height: 73,
    weight: 150
});

console.log('I made a request to change the data');