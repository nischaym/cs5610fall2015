var model = require("../models/user.model.js")();

module.exports = function (app) {

    app.post('/api/user',CreateNewUser);
    app.get('/api/user?',findByQueryString); /* for login */
    app.get('/api/user/:id', allUsersById);
    app.put('/api/user/:id',updateUser);
    app.delete('/api/user/:id',removeUser);


    function CreateNewUser (req, res) {

        var user = req.body;

        res.json(model.create(user));
    }

    function  allUsers (req, res) {
        res.json(model.findAll());
    }

    function allUsersById (req, res) {
        var userid = req.params.id;
        res.json(model.findById(userid));
    }

    function findByQueryString(req,res)
    {
        //console.log("im here");
        if(req.query.password == null && req.query.username == null)
        {
            allUsers(req,res);
        }
        else if(req.query.password == null)
        {
            findByUsername(req,res);
        }
        else
        {
            findByCredentials(req,res);
        }
    }

    function findByUsername(req, res) {
        var username = req.query.username;
        res.json(model.findUserByUsername(username));
    }

    function findByCredentials(req, res) {

        var username = req.query.username;
        var password = req.query.password;
        res.json(model.findUserByCredentials(username , password));
    }

    function updateUser(req, res) {

        console.log("updateuser");
        var userid = req.params.id;
        var user = req.body;
        console.log(userid);
        console.log(user);
        res.json(model.update(userid ,user));
    }

    function removeUser(req, res) {
        var userid = req.params.id;
        res.json(model.remove(userid));
    }
};