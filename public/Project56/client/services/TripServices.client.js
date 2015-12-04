(function () {

    angular
        .module("TripTorque")
        .factory("TripService", TripService);

    function TripService ($http , $q)
    {

        var form_temp = [];

        var tripservices =
        {
            createTripForUser: createTripForUser,
            findAllTripsByUserId:findAllTripsByUserId,
            getTripById:getTripById,
            //findTripsforUserId:findTripsforUserId,
            //deleteFormById: deleteFormById,
            updateTripById: updateTripById
        };

        return tripservices;

        function createTripForUser(newtrip)
        {
            var deferred = $q.defer();
            console.log('reached trip services');
            $http.post("/api/trip/"+newtrip.userid+"/trip",newtrip)
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
       }


        function findAllTripsByUserId (userid)
        {
            var deferred = $q.defer();
            $http.get("/api/trip/"+userid+"/trip")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getTripById(tripid)
        {
            var deferred = $q.defer();
            $http.get("/api/trip/"+tripid+"/tripid")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;

        }

        //function deleteFormById (id)
        //{
        //    var deferred = $q.defer();
        //    $http.delete("/api/form/"+id)
        //        .success(function(response){
        //            deferred.resolve(response);
        //        });
        //    return deferred.promise;
        //}
        //
        //
        function updateTripById(trip)
        {
            var deferred = $q.defer();
            $http.put("/api/trip/"+trip._id,trip)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
         }
    }
})();