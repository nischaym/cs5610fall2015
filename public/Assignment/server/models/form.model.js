
var forms = require("./form.mock.json");

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
        var temp = [];
        var j=0;
        newForm.id = forms.length + 1;
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

    /*Field Model */    function fieldsOfForm(id){

        var fields=[];
        for(var i=0;i<forms.length;i++)
        {
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
                for (var j=0;j<fields.length;j++)
                {
                    if (fields[j].fieldid = fieldid)
                    {
                        fields.splice(j,1);
                        success = true;
                        break;
                    }
                }
            }
        }
        return(success);
    }

    function createFieldForForm(id,field) {

        var form;
        for(var i=0;i<forms.length;i++)
        {
            if(forms[i].id == id)
            {
                forms[i].fields.push(field);
                var form = form[i];
                break;
            }
        }
       return(form);
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