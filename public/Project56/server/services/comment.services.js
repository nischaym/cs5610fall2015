//var model = require("../models/form.model.js")();

module.exports = function(app,model) {


    app.get('/api/trip/:tripid/comments', allCommentsOfTrip);
    app.post('/api/trip/:tripid/comment', createCommentForTrip);
    app.get('/api/trip/comments/', getAllComments);
    app.delete('/api/trip/comments/:commentid', removeCommentById);



    function allCommentsOfTrip(req , res)
    {
        var tripid = req.params.tripid;
        //console.log(id);
        model
            .findAllCommentsForTrip(tripid)
            .then(function(comments){
                res.json(comments);
            });
    }

    function FieldOfTheForm(req,res)
    {
        var id = req.params.formid;
        var fieldid = req.params.fieldid;
        res.json(model.fieldOfTheForm(id,fieldid));
    }

    function createCommentForTrip(req, res) {

        console.log('in create of comment');
        var tripid = req.params.tripid;
        var comment = req.body;
        model
            .create(comment)
            .then(function(comment){
                res.json(comment);
            });
    }


    function getAllComments(req,res){

        model
            .getAllComments()
            .then(function(comments){
                res.json(comments);
            });
    }

    function removeCommentById(req,res){
        var id = req.params.commentid;
        model
            .remove(id)
            .then(function(comments){
                res.json(comments);
            });

    }

};