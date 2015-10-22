(function () {

    angular
        .module("FormBuilderApp")
        .factory("FormController", FormController)

    function FormController ()
    {
        var forms = [
            {formid : "" , userid : ""},
            {}
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
            form.userid = userid;
            form.formid = forms.length + 1;
            forms.push(form);
            cb_fn(form);
        }

        function findAllFormsForUser ()
        {

        }
    }


})();