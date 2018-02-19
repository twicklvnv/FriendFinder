
var path = require("path");

module.exports = function(app) {

	//html get requests to retrieve html pages
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})
}