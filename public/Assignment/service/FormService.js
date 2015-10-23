(function () {

    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService)

    function FormService ()
    {
        var forms = [
            { formid: "1", userid: "1", formname: "Registration" },
            { formid: "2", userid: "2", formname: "Contact List" }
        ];


        var formservice =
        {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        }
        return formservice;

        function createFormForUser(userid, form, cb_fn)
        {
            //form.userid = userid;
            //form.formid = forms.length + 1;
            forms.push(form);
            cb_fn(forms);
        }

        
        function findAllFormsForUser (userid , cb_fn)
        {
            var send_back_forms = [];
            var j = 0;
            for (var i=0;i< forms.length;i++)
            {
                if(forms[i].userid == userid)
                {
                    send_back_forms[j] = forms[i];
                    j++;
                }
            }
            cb_fn(send_back_forms);
        }

        function deleteFormById (formid , cb_fn)
        {
            for(var i=0;i<forms.length;i++)
            {
                if(formid == forms[i].formid)
                {
                    forms.splice(i,1);
                    break;
                }
            }
            cb_fn(forms);
        }

        function updateFormById(formid , newForm , cb_fn)
        {
            console.log("service");
            console.log(newForm);
            var i=0
            for(i;i<forms.length;i++)
            {
                if (newForm.formid == forms[i].formid)
                {
                    forms[i] = newForm;
                    break;
                }
            }
            cb_fn(forms);
        }
    }
})();