(function () {

    angular
        .module("TripTorque")
        .factory("CommentService", CommentService);


    function CommentService($rootScope,$http,$q) {

        var commentservice =
        {
            createCommentForTrip:createCommentForTrip,
            getCommentsForTrip:getCommentsForTrip,
            findAllComments: findAllComments,
            removeCommentById:removeCommentById,
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

        function findAllComments(){

            var deferred = $q.defer();
            $http.get("/api/trip/comments/")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;

        }

        function removeCommentById(commentid){

            var deferred = $q.defer();
            $http.delete("/api/trip/comments/"+commentid)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;


        }
    }

})();