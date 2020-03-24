import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDOIApO6jCmsHukgASOSCGpdeios-TqxEo",
    authDomain: "ants-on-stilts.firebaseapp.com",
    databaseURL: "https://ants-on-stilts.firebaseio.com",
    projectId: "ants-on-stilts",
    storageBucket: "ants-on-stilts.appspot.com",
    messagingSenderId: "216307315412",
    appId: "1:216307315412:web:34de777b33fd21bfd78141",
    measurementId: "G-VVV3K6T4TT"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;