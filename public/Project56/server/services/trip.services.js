//var model = require("../models/form.model.js")();

module.exports = function (app,model) {


    app.post('/api/trip/:userid/trip',CreateNewTrip);
    //app.get('/api/user?',findByQueryString); /* for login */
    app.get('/api/trip/:userid/trip', findAllTripsByUserId);
    app.get('/api/trip/:tripid/tripid', findTripById);

    app.put('/api/trip/:tripid',updateTrip);
    app.delete('/api/trip/:tripid',removeTripById);
    app.get('/api/home/trip',getAllTrips);
    //app.get('/api/search/trip/:placename',searchByKeyword);


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
    function updateTrip(req, res) {

        console.log('in update');
        //var id = req.params.id;
        var trip = req.body;
        model
            .update(trip)
            .then(function(trip){
                res.json(trip);
            });
    }

    function getAllTrips(req, res) {
        //var id = req.params.id;
        model
            .getAlltrips()
            .then(function(trips){
                res.json(trips);
            });
    }

    function removeTripById(req,res){
        var tripid = req.params.tripid;
        model
            .removeTrip(tripid)
            .then(function(trips){
                res.json(trips);
            });
    }

    //function searchByKeyword(req,res){
    //    var placename = req.params.placename;
    //    model
    //        .searchByKeyword(placename)
    //        .then(function(trips){
    //            res.json(trips);
    //        });
    //
    //
    //}
};