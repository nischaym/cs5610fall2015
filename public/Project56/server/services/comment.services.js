//var model = require("../models/form.model.js")();

module.exports = function(app,model) {


    app.get('/api/trip/:tripid/comments', allCommentsOfTrip);
    app.post('/api/trip/:tripid/comment', createCommentForTrip);
    //app.get('/api/form/:formid/field/:fieldid', FieldOfTheForm);
    //app.delete('/api/form/:formid/field/:fieldid', RemoveFieldOfTheForm);
    //app.post('/api/form/:formid/field',CreateNewField);
    //app.put('/api/form/:formid/field/:fieldid', updateField);



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


    function CreateNewField(req,res){

        var id = req.params.formid;
        var field = req.body;
        console.log(id);
        console.log(field);
        model
            .createFieldForForm(id,field)
            .then(function(fields){
                res.json(fields);
            });

        //res.json(model.createFieldForForm(id,field));
    }

    function updateField(){
        var id = req.params.formid;
        var field = req.body;
        res.json(model.updateField(id,field));

    }

};