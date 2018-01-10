const mysql = require("mysql");
const connetion = mysql.createConnection({
	host: '139.196.137.186',
	port: "8306",
	user: "root",
	password: "2d3k12",
	database: "users"
});

connetion.connect(function(err) {
	if(err) {
		console.error(err);
		return;
	}
	console.log("connetion id: ", connetion.threadId);
});

module.exports = connetion;