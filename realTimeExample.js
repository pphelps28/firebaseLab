const db = require("./setup").db;

function readRealTime() {
	//Read
	db.ref("users/")
		.once("value")
		.then((snapshot) => {
			console.log(snapshot.toJSON());
		});
}
//readRealTime()
function writeRealTime() {
	//Write
	db.ref("users/1").set(
		{
			username: "Paul",
			age: 29,
			interests: ["Gaming", "Music", "Programming", "Cycling", "D&D"],
		},
		(err) => {
			if (err) {
				console.log(err.message);
			} else {
				console.log("SUCCESS!");
			}
		}
	);
}
//writeRealTime()
