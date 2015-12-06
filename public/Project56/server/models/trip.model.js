
//var uuid = require('uuid');
var q = require("q");

module.exports = function(app,mongoose,db,TripSchema){

    var api;
    var TripModel = mongoose.model("TripModel" , TripSchema);

    api = {
        create: create,
        //findAll: findAll,
        //findById: findById,
        update: update,
        //remove: remove,
        //findFormByTitle: findFormByTitle,
        findAllTripsByUser: findAllTripsByUser,
        findtrip:findtrip,
        getAlltrips:getAlltrips,
        removeTrip:removeTrip

        ///* field model */
        //fieldsOfForm : fieldsOfForm,
        //fieldOfTheForm : fieldOfTheForm,
        //removeFieldFromForm:removeFieldFromForm,
        //createFieldForForm:createFieldForForm,
        //updateFieldOfForm:updateFieldOfForm

    };

    return api;


    function create(newtrip){

        var deferred = q.defer();
        TripModel.create(newtrip,function(err , trip){
            deferred.resolve(trip);
        });
        return deferred.promise;
    }

    function findAllTripsByUser(userid){

        var deferred = q.defer();
        TripModel.find({userid:userid},function(err , trip){
            deferred.resolve(trip);
        });
        return deferred.promise;
     }


    function findtrip(tripid){

        var deferred = q.defer();
        TripModel.findById(tripid,function(err , trip){
            deferred.resolve(trip);
        });
        return deferred.promise;
    }
    function remove(id){

        var deferred = q.defer();
        FormModel.remove({id:id},function(err ,result){
            deferred.resolve(result);
        });
        return deferred.promise;


        //for (var i=0;i<forms.length;i++)
        //{
        //    if(forms[i].id == id)
        //    {
        //        forms.splice(i,1);
        //        break;
        //    }
        //}
        //return(0);
    }

    function update(trip){

        console.log('model');
        var deferred = q.defer();
        TripModel.findByIdAndUpdate(trip._id,{$set:{summary:trip.summary,content:trip.content}},function(err , form){
                console.log(trip);
                deferred.resolve(trip);
        });
        return deferred.promise;
    }

    function getAlltrips(){

         var deferred = q.defer();
        TripModel.find().sort('-createddate').find(function (err, trips) {
            console.log(trips);
            deferred.resolve(trips);
        });
        return deferred.promise;

    }

    function removeTrip(tripid){

        var deferred = q.defer();
        TripModel.remove( {_id:tripid},function (err, trips) {
            console.log(trips);
            deferred.resolve(trips);
        });
        return deferred.promise;

    }
};