(function () {

    angular
        .module("TripTorque")
        .factory("CommentService", CommentService);


    function CommentService($rootScope,$http,$q) {

        var commentservice =
        {
            createCommentForTrip:createCommentForTrip,
            getCommentsForTrip:getCommentsForTrip
            //getFieldForForm: getFieldForForm,
            //deleteFieldFromForm:deleteFieldFromForm,
            //updateField:updateField
        };

        return commentservice;


        function createCommentForTrip(comment)
        {
            console.log(comment);
            var deferred = $q.defer();
            $http.post("/api/trip/"+comment.tripid+"/comment",comment)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getCommentsForTrip(tripid)
        {
            var deferred = $q.defer();
            $http.get("/api/trip/"+tripid+"/comments")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    }

})();