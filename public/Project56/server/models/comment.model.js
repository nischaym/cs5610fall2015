var q = require("q");

module.exports = function(app,mongoose,db,CommentSchema){

    var api;
    var CommentModel = mongoose.model("CommentModel" , CommentSchema);

    api = {
        create: create,
        findAllCommentsForTrip:findAllCommentsForTrip,
        getAllComments:getAllComments,
        remove:remove
    };

    return api;


    function create(newcomment){

        var deferred = q.defer();
        CommentModel.create(newcomment,function(err , comment){
            deferred.resolve(comment);
        });
        return deferred.promise;
    }

    function findAllCommentsForTrip(tripid){

        var deferred = q.defer();
        CommentModel.find({tripid:tripid},function(err , comments){
            deferred.resolve(comments);
        });
        return deferred.promise;
    }

    function remove(commentid){

        var deferred = q.defer();
        CommentModel.remove({_id:commentid},function(err ,result){
            deferred.resolve(result);
        });
        return deferred.promise;
    }

    function getAllComments(){

        var deferred = q.defer();
        CommentModel.find(function(err , comments){
            deferred.resolve(comments);
        });
        return deferred.promise;

    }

};