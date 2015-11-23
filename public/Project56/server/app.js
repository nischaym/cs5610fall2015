module.exports = function (app) {


    require("./services/user.services.js")(app);
    require("./services/form.services.js")(app);
    require("./services/field.services.js")(app);
    /*
    var users = [
        { userid: 1, username: "Nischay", password: "nischay", email: "nischay@neu.edu", firstname: "Nischaygowda", lastname: "m" },
        { userid: 2, username: "Gavrav", password: "gavrav", email: "gavrav@neu.edu", firstname: "Ga", lastname: "G" }
    ];

    app.get('/api/user', function (req, res) {

        res.json(users);
    });

    app.get('/api/user/:id', function (req, res) {
        var index = req.params.id;
        res.json(users[index]);
    });*/

};