(function () {

    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);
    //    .controller("ModalDemoCtrl",ModalDemoCtrl)
    //    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
    //
    //    $scope.items = items;
    //    $scope.selected = {
    //        item: $scope.items[0]
    //    };
    //
    //    $scope.ok = function () {
    //        $uibModalInstance.close($scope.selected.item);
    //    };
    //
    //    $scope.cancel = function () {
    //        $uibModalInstance.dismiss('cancel');
    //    };
    //});
    //
    //function ModalDemoCtrl($scope, $uibModal, $log){
    //    $scope.items = ['item1', 'item2', 'item3'];
    //
    //    $scope.animationsEnabled = true;
    //
    //    $scope.open = function () {
    //
    //        var modalInstance = $uibModal.open({
    //            animation: $scope.animationsEnabled,
    //            templateUrl: 'form-fields.view.html',
    //            controller: 'ModalInstanceCtrl',
    //            //size: size,
    //            resolve: {
    //                items: function () {
    //                    return $scope.items;
    //                }
    //            }
    //        });
    //
    //        modalInstance.result.then(function (selectedItem) {
    //            $scope.selected = selectedItem;
    //        }, function () {
    //            $log.info('Modal dismissed at: ' + new Date());
    //        });
    //    };
    //
    //    $scope.toggleAnimation = function () {
    //        $scope.animationsEnabled = !$scope.animationsEnabled;
    //    };
    //}

    function FieldController($scope , FormService ,$location,$rootScope,$routeParams)
    {
        $scope.user = {};
        $scope.user.userid = $routeParams.userid;
        $scope.formid = $routeParams.id;
        //var user = $rootScope.user;
        $scope.currFields = [];
        $scope.displayFields = [];

        $scope.availableFields = [
            {label: "Single Line Text", type: "TEXT"},
            {label: "Multi Line Text", type: "TEXTAREA"},
            {label: "Date", type: "DATE"},
            {label: "Dropdown", type: "OPTIONS"},
            {label: "Checkboxes", type: "CBOX" },
            {label: "Radio Buttons", type: "RADIO"}
        ];


        $scope.addField = addField;

        function addField(fieldType){
            var id = $scope.currFields.length;
            $scope.currFields.push({id: id, type: fieldType});
        }

        $scope.saveForm = function(){

            $scope.displayFields = $scope.displayFields.concat($scope.currFields);
            console.log(JSON.stringify($scope.currFields));
            $scope.fieldType = ""
            $scope.currFields=[];
        };

        //FormService.findAllFormsForUser(user.userid, update_forms);

        //function addField()
        //{
        //    var newform = {
        //        formid: (FormService.allForms() + 1),
        //        //formid: $scope.forms.length + 1,
        //        userid: user.userid,
        //        formname: $scope.form.formname
        //    };
        //
        //    //form.userid = 1;//$rootScope.user.userid;
        //    //form.formid = $scope.forms.length + 1;
        //    //form.formname = $scope.form.formname;
        //    FormService.createFormForUser(user.userid, newform, update_forms);
        //    $scope.form.formname = "";
        //}
        //
        //function removeField(index)
        //{
        //    console.log($scope.form);
        //    var newform = {
        //        formid: $scope.forms[index].formid,
        //        userid: "",
        //        formname: $scope.form.formname
        //    };
        //
        //    //form.formid = ;
        //    FormService.deleteFormById(newform.formid, update_forms);
        //}

/*        function selectForm(index) {
            
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
            FormService.updateFormById($scope.newForm.userid, $scope.newForm, update_forms);
            $scope.form.formname = "";
        }

        /* Call Back Functions*

        function update_forms(forms) {
            $scope.forms = forms;
            //$location.url('/forms');
        }
*/
    }

})(); 