import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyB_fln91xB265ISN4xoOZ1U9ZngPZBOsSM",
    authDomain: "ipam-dj.firebaseapp.com",
    databaseURL: "https://ipam-dj.firebaseio.com",
    projectId: "ipam-dj",
    storageBucket: "ipam-dj.appspot.com",
    messagingSenderId: "960350779710",
    appId: "1:960350779710:web:52bb81b23470b9b16c146f",
    measurementId: "G-VWWR9EBQ2V"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase