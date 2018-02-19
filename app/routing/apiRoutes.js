var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

    //get request to retrieve api friends info
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    //post to friends api
    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            photo: "",
            difference: 1000
        };

        console.log(req.body);

        var userInfo = req.body;
        var userScores = userInfo.scores;
        var userName = userInfo.name;
        var userPhoto = userInfo.photo
        console.log(userScores);
        var totalDifference = 0;

        //loop through all possible friends in array "database"
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through the scores of each possible friend
            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                console.log("Total Difference is " + totalDifference);

                if (totalDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;
                }
            }
            console.log(match.name);
        }

        friends.push(userInfo);

        res.json(match);
    })
}