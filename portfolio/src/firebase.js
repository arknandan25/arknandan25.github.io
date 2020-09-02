import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBzvcEZCCc7EORgR2ZOxz1LKnzLYaFLosc",
    authDomain: "portfolio-80e00.firebaseapp.com",
    databaseURL: "https://portfolio-80e00.firebaseio.com",
    projectId: "portfolio-80e00",
    storageBucket: "portfolio-80e00.appspot.com",
    messagingSenderId: "434864247434",
    appId: "1:434864247434:web:1d55b43bb6350c17289373",
    measurementId: "G-83TJ0T5QMH"
  }
);

export const db = app.database();
export const namesRef  = db.ref('names')