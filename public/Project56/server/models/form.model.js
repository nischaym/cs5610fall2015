﻿
var forms = require("./form.mock.json");
var uuid = require('uuid');

module.exports = function(app){

    var api;
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
        forms.push(newForm);

        for (var i=0;i<forms.length;i++)
        {
            if(forms[i].userid == userid)
            {
                temp[j] = forms[i];
                j++;
            }
        }
        return(temp);
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

        for (var i=0;i<forms.length;i++)
        {
            if(forms[i].userid == userid)
            {
                temp[j] = forms[i];
                j++;
            }
        }
        return(temp);
     }


    function remove(id){

        for (var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                forms.splice(i,1);
                break;
            }
        }
        return(0);
    }

    function update(id,form){

        console.log('model');
        console.log(id);
        console.log(form);

        for (var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                console.log('inside if');
                console.log(forms[i]);
                forms[i].title = form.title;
                console.log(forms[i]);
                break;
            }
        }
        return(forms);
    }

    /*Field Model */

    function fieldsOfForm(id){

        var fields=[];
        for(var i=0;i<forms.length;i++)
        {
            console.log(forms[i].id);
            if(forms[i].id == id)
            {
                fields = forms[i].fields;
                break;
            }
        }
        return(fields);
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
        var success = false;
        for(var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                for (var j=0;j< forms[i].fields.length;j++)
                {

                    if (forms[i].fields[j].id == fieldid)
                    {

                        forms[i].fields.splice(j,1);
                        success = true;
                        break;
                    }
                }
            }
        }
        return(success);
    }

    function createFieldForForm(id,field) {

        var fields=[];
        for(var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                for (var j=0;j<field.length;j++)
                {
                    forms[i].fields.push(field[j]);
                }
                var fields = forms[i].fields;
                break;
            }
        }
       return(fields);
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