const db = require("./auth").db;
const auth = require("./auth").auth;
const googleAuth = require("./auth").googleAuth;

//auth().createUserWithEmailAndPassword("p.w.phelps28@gmail.com", "password123");

console.log(auth().currentUser);

async function signIn(email, password) {
	await auth().signInWithEmailAndPassword(email, password);
	console.log(auth().currentUser);
}

//signIn("p.w.phelps28@gmail.com", "password123");
