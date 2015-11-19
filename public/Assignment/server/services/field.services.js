var model = require("../models/form.model.js")();

module.exports = function (app) {


    app.get('/api/form/:formid/field', allFieldsOfTheForm);
    app.get('/api/form/:formid/field/:fieldid', FieldOfTheForm);
    app.delete('/api/form/:formid/field/:fieldid', RemoveFieldOfTheForm);
    app.post('/api/form/:formid/field',CreateNewField);
    app.put('/api/form/:formid/field/:fieldid', updateField);



    function allFieldsOfTheForm(req , res)
    {

        var id = req.params.formid;
        console.log(id);
        res.json(model.fieldsOfForm(id));
    }

    function FieldOfTheForm(req,res)
    {
        var id = req.params.formid;
        var fieldid = req.params.fieldid;
        res.json(model.fieldOfTheForm(id,fieldid));
    }

    function RemoveFieldOfTheForm(req, res) {

        var id = req.params.formid;
        var fieldid = req.params.fieldid;
        console.log(id);
        console.log(fieldid);
        console.log('abfsobobob');
        res.json(model.removeFieldFromForm(id ,fieldid));
    }


    function CreateNewField(req,res){

        var id = req.params.formid;
        var field = req.body;
        res.json(model.createFieldForForm(id,field));
    }

    function updateField(){
        var id = req.params.formid;
        var field = req.body;
        res.json(model.updateField(id,field));

    }

};