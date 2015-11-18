var model = require("../models/form.model.js")();

module.exports = function (app) {


    app.get('/api/form/:formid/field', allFieldsOfTheForm);
    app.get('/api/form/:formid/field/:fieldid', FieldOfTheForm);
    app.delete('/api/form/:formid/field', RemoveFieldOfTheForm);
    app.post('/api/form/:formid/field',CreateNewField);
    app.put('/api/form/:formid/field/:fieldid', updateField);



    function allFieldsOfTheForm(req , res)
    {
        var id = req.params.formid;
        res.json(model.fieldsOfForm(userid,form));
    }

    function FieldOfTheForm(req,res)
    {
        var id = req.params.formid;
        var fieldid = req.params.fieldid;
        res.json(model.fieldOfTheForm(id,fieldid));
    }







    function CreateNewForm (req, res) {

        //console.log('create');

        var userid = req.params.userid;
        var form = req.body;

        console.log(req.params.userid);
        console.log(req.body);
        res.json(model.create(userid,form));
    }

    function  allFormsByUserId (req, res) {

        var userid = req.params.userid;
        res.json(model.findFormsByUserid(userid));
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

        console.log('im in update');
        console.log(req.params.id);
        console.log(req.body);

        var id = req.params.id;
        var form = req.body;
        res.json(model.update(id ,form));
    }

    function removeForm(req, res) {
        var id = req.params.id;
        res.json(model.remove(id));
    }
};