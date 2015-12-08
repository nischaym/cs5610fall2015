//var model = require("../models/user.model.js")();

module.exports = function (app,model) {

    app.post('/api/user',CreateNewUser);
    app.get('/api/user?',findByQueryString); /* for login */
    app.get('/api/user/:id', findUserByUserId);
    app.put('/api/user/:id',updateUser);
    app.delete('/api/user/:id',removeUser);
    app.get('/api/users/admin',getAllUsers);


    function getAllUsers(req , res){

        model
            .getAllUsers()
            .then(function(result){
                res.json(result);
            });
    }

    function CreateNewUser (req, res) {

        console.log('i reached create');
        var user = req.body;
        model
            .create(user)
            .then(function(newuser){
                res.json(newuser);
            });
    }

    function  allUsers (req, res) {
        res.json(model.findAll());
    }

    function findUserByUserId (req, res) {
        console.log('inside find by ID');
        var userid = req.params.id;
        model
            .findUserByUserId(userid)
            .then(function(user){
                res.json(user);
            });
    }

    function findByQueryString(req,res)
    {
        console.log('findbyquerystring');
        if(req.query.password == null && req.query.username == null)
        {
            //allUsers(req,res);
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
        model
            .findUserByUsername(username)
            .then(function(result){
                res.json(result);
            });
    }

    function findByCredentials(req, res) {

        var username = req.query.username;
        var password = req.query.password;
        model
            .findUserByCredentials(username,password)
            .then(function(user){
                res.json(user);
            });

    }

    function updateUser(req, res) {

        console.log("updateuser");
        var userid = req.params.id;
        var user = req.body;
        console.log(userid);
        console.log(user);
        model
            .update(user._id,user)
            .then(function(user){
                res.json(user);
            });
    }

    function removeUser(req, res) {
        var userid = req.params.id;
        res.json(model.remove(userid));
    }
};