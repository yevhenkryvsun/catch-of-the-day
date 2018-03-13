import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCllSwZ7Gz5E-VyuHIEzhwXHscZ-7Lznj4",
    authDomain: "catch-of-the-day-yevsun.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-yevsun.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;