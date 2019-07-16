import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvJB1rZyjMySfdw25fIwhD-SDoxyS-Cho",
    authDomain: "project-manager-d5998.firebaseapp.com",
    databaseURL: "https://project-manager-d5998.firebaseio.com",
    projectId: "project-manager-d5998",
    storageBucket: "project-manager-d5998.appspot.com",
    messagingSenderId: "924067568613",
    appId: "1:924067568613:web:ff30e222b2f891dd"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;