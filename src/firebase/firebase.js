import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAxf_k_6WEYuCJcMH2jdH_3MmCwtg8maBI",
    authDomain: "my-expenditure-fc108.firebaseapp.com",
    databaseURL: "https://my-expenditure-fc108.firebaseio.com",
    projectId: "my-expenditure-fc108",
    storageBucket: "my-expenditure-fc108.appspot.com",
    messagingSenderId: "58188798541",
    //appId: "1:58188798541:web:cd27e8eebf102cb7"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export { firebase, database as default };
//export default database;

export { firebase, googleAuthProvider, database as default };



//  CHILD REMOVE

// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// // CHILD CHANGED
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// // CHILD ADDDED
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('Expenses').push({
//     description: 'Internet bill',
//     notes: ' first expenses details',
//     amount: '500',
//     createdAt: '2019'
// });


        // FETCH DATA 

// database.ref('Expenses').on('value', (e) => {
//     const expenses = [];
//     e.forEach((childProperties) => {
//         expenses.push({
//             id: childProperties.key,
//             ...childProperties.val()
//         })
//     });
//     console.log(expenses);
// });




                                                                        // WORKOUT

        // FETCH DATA  MULTIPLE TIME
// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     });

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 4000);

// setTimeout(() => {
//     database.ref().off();
// }, 5000);

// setTimeout(() => {
//     database.ref('age').set(60);
// }, 7000);


    // FETCH SINGLE TIME
// database.ref('address')
//     .once('value')
//     .then((e) => {
//         const val = e.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('encounter errors ', e);
//     });



// database.ref().set({
//     name: ' Puspa Gurung',
//     age: 29,
//     gender: 'male',
//     address: {
//         country: 'Norway',
//         city: 'Oslo'
//     }

// }).then(() => {
//     console.log('data in the database')
// }).catch((error) => {
//     console.log('Encounter errors, fail to load data', error)
// });

// database.ref('address').set({
//     country: 'Norway',
//     city: 'Oslo'
// }).then(() => {
//     console.log('new data in the database');
// }).catch((x) => {
//     console.log('this is second one :', x);
// });

//      //UPDATE DATA by update (update or delete  existing data,  add new properties)
// database.ref().update({
//     name: 'Danial',
//     age: 35,
//     profession: 'developer',
//     gender: null,
//     // update child items
//     'address/city': 'Stavanger'

// });




    // DELETE DATA BY ASSIGNING null
//database.ref('age').set(null);



    // REMOVE DATA FROM DATABSE
// database.ref('age')
//     .remove()
//     .then(() => {
//         console.log('data has been removed');
//     })
//     .catch((e) => {
//         console.log('Unable to delete: ', e);
//     });