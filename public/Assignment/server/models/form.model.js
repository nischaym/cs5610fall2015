
var forms = require("./form.mock.json");

module.exports = function(app){

    var api;
    api = {
        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findFormByTitle: findFormByTitle

    };

    return api;

    function create(){
        forms.push(form);
        return(forms);
    }

    function findAll(){

        return(forms);
    }

    function findById( formid){

        /*Check for the form in the mock list */
        var form = null;
        for (var i=0;i < forms.length;i++)
        {
            if (forms[i].formid == formid)
            {
                form = forms[i];
                break;
            }
            else
            {
                /*Do Nothing */
            }
        }
        return(form);
    }

    function update(formid,form){

        //var user = null;
        for (var i=0;i < forms.length;i++)
        {
            if (forms[i].formid == formid)
            {
                forms[i].formname = form.formname;
                forms[i].password = form.password;
                forms[i].email = form.email;
                forms[i].firstname = form.firstname;
                forms[i].lastname = form.lastname;
                //cb_fn(users[i]);
                break;
            }
            else
            {
                /*Do Nothing */
            }
        }
        return(form);
    }

    function remove(formid){

        for (var i=0;i<forms.length;i++)
        {
            if (forms[i].formid == formid)
            {
                forms.splice(i, 1);
                break;
            }
        }
        ca_fn(forms);
    }


    /* specific to Form */

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
};