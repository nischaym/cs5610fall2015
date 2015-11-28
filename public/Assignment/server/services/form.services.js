//var model = require("../models/form.model.js")();

module.exports = function (app,model) {


    app.post('/api/form/:userid/form',CreateNewForm);
    //app.get('/api/user?',findByQueryString); /* for login */
    app.get('/api/form/:userid/form', allFormsByUserId);
    app.put('/api/form/:id',updateForm);
    app.delete('/api/form/:id',removeForm);


    function CreateNewForm (req, res) {

        console.log('create');

        var userid = req.params.userid;
        var form = req.body;

        model
            .create(userid,form)
            .then(function(newform){
                res.json(newform);
            });

        //console.log(req.params.userid);
        //console.log(req.body);
        //res.json(model.create(userid,form));
    }

    function  allFormsByUserId (req, res) {

        var userid = req.params.userid;
        model
            .findFormsByUserid(userid)
            .then(function(forms){
                res.json(forms);
            });

        //res.json(model.findFormsByUserid(userid));
    }

    function allUsersById (req, res) {
        var userid = req.params.id;
        res.json(model.findById(userid));
    }

    function findByQueryString(req,res)
    {
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

    function updateForm(req, res) {

        //console.log('im in update');
        //console.log(req.params.id);
        //console.log(req.body);

        var id = req.params.id;
        var form = req.body;
        model
            .update(id,form)
            .then(function(forms){
                res.json(forms);
            });

        //res.json(model.update(id ,form));
    }

    function removeForm(req, res) {
        var id = req.params.id;
        res.json(model.remove(id));
    }
};