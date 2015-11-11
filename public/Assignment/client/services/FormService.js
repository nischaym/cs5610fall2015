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

        var form_temp = [];

        var formservice =
        {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            allForms : allForms

        }

        return formservice;

        function allForms ()
        {
            return forms.length;
        }

        function createFormForUser(userid, form, cb_fn)
        {
            forms.push(form);
            var j = 0;
            for (var i = 0; i < forms.length; i++)
            {
                if (forms[i].userid == form.userid)
                {
                    form_temp[j] = forms[i];
                    j = j + 1;
                }
            }
            cb_fn(form_temp);
            console.log(form_temp);
            form_temp = [];
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
            var userid;
            for(var i=0;i<forms.length;i++)
            {
                if(formid == forms[i].formid)
                {
                    userid = forms[i].userid
                    forms.splice(i, 1);
                    break;
                }
            }

            var j = 0;
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userid == userid) {
                    form_temp[j] = forms[i];
                    j = j + 1;
                }
            }
            cb_fn(form_temp);
            console.log(form_temp);
            form_temp = [];
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

            var j = 0;
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userid == newForm.userid) {
                    form_temp[j] = forms[i];
                    j = j + 1;
                }
            }
            cb_fn(form_temp);
            form_temp = [];

        }
    }
})();