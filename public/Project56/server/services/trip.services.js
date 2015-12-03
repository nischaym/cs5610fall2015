//var model = require("../models/form.model.js")();

module.exports = function (app,model) {


    app.post('/api/trip/:userid/trip',CreateNewTrip);
    //app.get('/api/user?',findByQueryString); /* for login */
    app.get('/api/trip/:userid/trip', findAllTripsByUserId);
    app.get('/api/trip/:tripid/tripid', findTripById);

    //app.put('/api/form/:id',updateForm);
    //app.delete('/api/form/:id',removeForm);


    function CreateNewTrip (req, res) {

        console.log('create');

        var userid = req.params.userid;
        var trip = req.body;

        model
            .create(trip)
            .then(function(newtrip){
                res.json(newtrip);
            });

    }

    function  findAllTripsByUserId (req, res) {

        var userid = req.params.userid;
        model
            .findAllTripsByUser(userid)
            .then(function(forms){
                res.json(forms);
            });

        //res.json(model.findFormsByUserid(userid));
    }

    function findTripById(req,res)
    {
        var tripid = req.params.tripid;
        model
            .findtrip(tripid)
            .then(function(trip){
                res.json(trip);
            });

    }
    //function allUsersById (req, res) {
    //    var userid = req.params.id;
    //    res.json(model.findById(userid));
    //}
    //
    //function findByQueryString(req,res)
    //{
    //    if(req.query.password == null && req.query.username == null)
    //    {
    //        allUsers(req,res);
    //    }
    //    else if(req.query.password == null)
    //    {
    //        findByUsername(req,res);
    //    }
    //    else
    //    {
    //        findByCredentials(req,res);
    //    }
    //}
    //
    // function findByUsername(req, res) {
    //     var username = req.query.username;
    //    res.json(model.findUserByUsername(username));
    //}
    //
    //function findByCredentials(req, res) {
    //
    //    var username = req.query.username;
    //    var password = req.query.password;
    //    res.json(model.findUserByCredentials(username , password));
    //}
    //
    //function updateForm(req, res) {
    //
    //    //console.log('im in update');
    //    //console.log(req.params.id);
    //    //console.log(req.body);
    //
    //    var id = req.params.id;
    //    var form = req.body;
    //    model
    //        .update(id,form)
    //        .then(function(forms){
    //            res.json(forms);
    //        });
    //
    //    //res.json(model.update(id ,form));
    //}
    //
    //function removeForm(req, res) {
    //    var id = req.params.id;
    //    res.json(model.remove(id));
    //}
};