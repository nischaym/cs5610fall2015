(function () {

    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope , FormService ,$location,$rootScope,$q)
    {
        //$scope.form.title = "";
        var user = $rootScope.user;
        $scope.user.userid = $rootScope.user.userid;
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        FormService.findAllFormsForUser($scope.user.userid).then(function(response){
            $scope.forms = response;
        });

        function addForm()
        {
            var newform = {
                userid: user.userid,
                title: $scope.form.title
            };

            console.log('controller');
            console.log(newform);
            FormService.createFormForUser(newform.userid, newform).then(function(response){

                $scope.forms = response;
            });

            $scope.form.title = "";
        }

        function deleteForm(index)
        {
            var id = $scope.forms[index].id;

            console.log(id);
            FormService.deleteFormById(id).then(function(response){

                console.log(response);
                FormService.findAllFormsForUser($scope.user.userid).then(function(response){
                    $scope.forms = response;
                })
            })
        }

        function selectForm(index) {

            FormService.findAllFormsForUser($scope.user.userid).then(function(response){
                $scope.forms = response;
                $scope.selectedFormIndex = index;
                $scope.form.title = $scope.forms[index].title;
            })
        }

        function updateForm()
        {
            var newForm = {

                id: $scope.forms[$scope.selectedFormIndex].id,
                title: $scope.form.title,
                userid: $scope.user.userid
            };
           FormService.updateFormById(newForm.id, newForm).then(function(response){

                FormService.findAllFormsForUser($scope.user.userid).then(function(response){
                    $scope.forms = response;
                })
            });
            $scope.form.title = "";
        }
    }

})(); 