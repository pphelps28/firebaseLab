const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
	apiKey: "AIzaSyAio6vwdZAJ1GlzX7C0Mg8bR6gLt1EpVBQ",
	authDomain: "fir-practice-87288.firebaseapp.com",
	databaseURL: "https://fir-practice-87288.firebaseio.com",
	projectId: "fir-practice-87288",
	storageBucket: "fir-practice-87288.appspot.com",
	messagingSenderId: "270975170469",
	appId: "1:270975170469:web:cef00b31317d4d81b61a4c",
	measurementId: "G-R28BVC59V8",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
	.ref("users/")
	.once("value")
	.then((snapshot) => {
		console.log(snapshot);
	});
