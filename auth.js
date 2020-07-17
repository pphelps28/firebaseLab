const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
	apiKey: "AIzaSyByoBtG7DGUgJ1-vCpZPdIum0iimXlYCrI",
	authDomain: "myproject-e55a8.firebaseapp.com",
	databaseURL: "https://myproject-e55a8.firebaseio.com",
	projectId: "myproject-e55a8",
	storageBucket: "myproject-e55a8.appspot.com",
	messagingSenderId: "912315804217",
	appId: "1:912315804217:web:8d254a5fae1c87766bbbe8",
	measurementId: "G-FQT5B5NJKV",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const db = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

module.exports = { auth, db, googleAuth };
