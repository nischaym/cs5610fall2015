(function () {

    angular
        .module("TripTorque")
        .factory("TripService", TripService)

    function TripService ($http , $q)
    {

        var form_temp = [];

        var tripservices =
        {
            createTripForUser: createTripForUser,
            findAllTrips:findAllTrips,
            findTripsforUserId:findTripsforUserId,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
        };

        return tripservices;

        function createFormForUser(userid, form)
        {
            var deferred = $q.defer();
            $http.post("/api/form/"+userid+"/form",form)
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
       }


        function findAllFormsForUser (userid)
        {
            var deferred = $q.defer();
            $http.get("/api/form/"+userid+"/form")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteFormById (id)
        {
            var deferred = $q.defer();
            $http.delete("/api/form/"+id)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }


        function updateFormById(id ,newForm )
        {
            console.log('im in update');
            console.log(newForm);
            var deferred = $q.defer();
            $http.put("/api/form/"+id,newForm)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
         }
    }
})();