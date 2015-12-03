
var uuid = require('uuid');
var q = require("q");

module.exports = function(app,mongoose,db,FormSchema){

    var api;
    var FormModel = mongoose.model("FormModel" , FormSchema);

    api = {
        create: create,
        //findAll: findAll,
        //findById: findById,
        update: update,
        remove: remove,
        findFormByTitle: findFormByTitle,
        findFormsByUserid: findFormsByUserid,

        /* field model */
        fieldsOfForm : fieldsOfForm,
        fieldOfTheForm : fieldOfTheForm,
        removeFieldFromForm:removeFieldFromForm,
        createFieldForForm:createFieldForForm,
        updateFieldOfForm:updateFieldOfForm

    };

    return api;


    function create(userid , form){

        var newForm = form;
        newForm.fields=[];
        var temp = [];
        var j=0;
        var uuid1 = uuid.v1();
        newForm.id = uuid1;//forms.length + 1;

        var deferred = q.defer();
        FormModel.create(newForm,function(err , form){
            deferred.resolve(form);
        });
        return deferred.promise;
    }

    /* specific to User Object*/

    function findFormByTitle( title){

        var form = null;
        for(var i =0;i<forms.length;i++)
        {
            if (forms[i].title == title)
            {
                form = forms[i];
                break;
            }
        }
        return(form);
    }

    function findFormsByUserid(userid){

        var temp = [];
        var j=0;

        var deferred = q.defer();
        console.log(userid);
        console.log('inside find by userid');
        FormModel.find({userid:userid},function(err , forms){
            console.log('response feom db');
            console.log(forms);
            deferred.resolve(forms);
        });
        return deferred.promise;

        //for (var i=0;i<forms.length;i++)
        //{
        //    if(forms[i].userid == userid)
        //    {
        //        temp[j] = forms[i];
        //        j++;
        //    }
        //}
        //return(temp);
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

    function update(id,form){

        console.log('model');
        //console.log(id);
        //console.log(form);
        var deferred = q.defer();
        FormModel.update({id:id},{$set:{title:form.title}},function(err , form){
            FormModel.find({id:id},function(err ,forms){
                deferred.resolve(forms);
            });
        });
        return deferred.promise;

        //for (var i=0;i<forms.length;i++)
        //{
        //    if(forms[i].id == id)
        //    {
        //        console.log('inside if');
        //        console.log(forms[i]);
        //        forms[i].title = form.title;
        //        console.log(forms[i]);
        //        break;
        //    }
        //}
        //return(forms);
    }

    /*Field Model */

    function fieldsOfForm(id){

        var deferred = q.defer();
        FormModel.find({id:id},function(err , form){
            console.log('fields of form : '+id);
            console.log(form);
                deferred.resolve(form);
        });
        return deferred.promise;

    }

    function  fieldOfTheForm(id,fieldid){

        var field;
        for(var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                for (var j=0;j<fields.length;j++)
                {
                    if (fields[j].fieldid = fieldid)
                    {
                        field = fields[j];
                        break;

                    }
                }
            }
        }
        return(field);
    }


    function removeFieldFromForm(id,fieldid)
    {
        var deferred = q.defer();

        FormModel.find({id:id},function(err ,doc){
            doc = doc[0];
            for(var i=0;i<doc.fields.length;i++)
            {
                if(doc.fields[i].id == fieldid)
                {
                    doc.fields.splice(i,1);
                    break;
                }
            }
            //doc.fields.push(local_field);
            doc.save(function( err , result){
                console.log(result);
                deferred.resolve(result);
            });
        });

        //var success = false;
        //for(var i=0;i<forms.length;i++)
        //{
        //    if(forms[i].id == id)
        //    {
        //        for (var j=0;j< forms[i].fields.length;j++)
        //        {
        //
        //            if (forms[i].fields[j].id == fieldid)
        //            {
        //                forms[i].fields.splice(j,1);
        //                success = true;
        //                break;
        //            }
        //        }
        //    }
        //}
        //return(success);
        return deferred.promise;

    }

    function createFieldForForm(id,field) {

        var deferred = q.defer();
        for(var i=0;i<field.length;i++)
        {
            var uuid1 = uuid.v1();
            field[i].id= uuid1;
        }

        //var local_field = field[0];
        var local_field = {

            id: field[0].id,
            fieldtype: field[0].type,
            placeholder:field[0].placeholder,
            label:field[0].label,
            options:field[0].options
        };

        console.log('after adding uuid');
        console.log(local_field);

        FormModel.find({id:id},function(err ,doc){
            doc = doc[0];

            console.log('the returned doc');
            console.log(doc);
            doc.fields.push(local_field);
            doc.save(function( err , result){
                console.log(result);
                deferred.resolve(result);
            });


        });
        //FormModel.update({id:id},{$push: {fields: local_field}},{safe: true, upsert: true, new : true},function(err , result){
        //    console.log(err);
        //    console.log(result);
        //    if (result != null)
        //
        //    {
        //        FormModel.find({id:id},function(err , form){
        //        deferred.resolve(form);
        //        });
        //    }
        //});
        return deferred.promise;
    }

    function updateFieldOfForm(id,fieldid,field)
    {
        var success = false;
        field.fieldid = fieldid;
        for(var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                for (var j=0;j<fields.length;j++)
                {
                    if (fields[j].fieldid = fieldid)
                    {
                        forms[i].fields[j] = field;
                    }
                }
            }
        }
        return(success);
    }
};