(function () {

    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController)

    function FormController($scope , FormService ,$location,$rootScope)
    {
        $scope.form = {formid: "" , userid: "", formname:""};
        var user = $rootScope.user;

        FormService.findAllFormsForUser(user.userid, update_forms);

        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        function addForm()
        {
            var newform = {
                formid: (FormService.allForms() + 1),
                //formid: $scope.forms.length + 1,
                userid: user.userid,
                formname: $scope.form.formname
            };

            //form.userid = 1;//$rootScope.user.userid;
            //form.formid = $scope.forms.length + 1;
            //form.formname = $scope.form.formname;
            FormService.createFormForUser(user.userid, newform, update_forms);
            $scope.form.formname = "";
        }

        function deleteForm(index)
        {
            console.log($scope.form);
            var newform = {
                formid: $scope.forms[index].formid,
                userid: "",
                formname: $scope.form.formname
            };

            //form.formid = ;
            FormService.deleteFormById(newform.formid, update_forms);
        }

        function selectForm(index) {
            
            $scope.selectedFormIndex = index;
            $scope.newForm = {
                formid: $scope.forms[index].formid,
                userid: $scope.forms[index].userid,
                formname: $scope.forms[index].formname
            };
            $scope.form.formname = $scope.forms[index].formname;
            
        }

        function updateForm()
        {
            $scope.newForm.formname = $scope.form.formname;
            //$scope.forms[$scope.selectedFormIndex].formname = form.formname;
            //$scope.forms[$scope.selectedFormIndex].formid = form.formid;
            //$scope.forms[$scope.selectedFormIndex].userid = form.userid;
            console.log("controller");
            console.log($scope.newForm);
            FormService.updateFormById($scope.newForm.userid, $scope.newForm, update_forms)
            $scope.form.formname = "";
        }

        /* Call Back Functions*/ 

        function update_forms(forms) {
            $scope.forms = forms;
            //$location.url('/forms');
        }
    }

})(); 