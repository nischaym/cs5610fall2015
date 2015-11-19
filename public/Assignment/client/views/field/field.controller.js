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

    function FieldController($scope , FieldService ,$location,$rootScope,$routeParams)
    {
        $scope.user = {};
        $scope.user.userid = $routeParams.userid;
        $scope.formid = $routeParams.id;
        var user = $rootScope.user;
        $scope.currFields = [];
        $scope.displayFields = [];

        /* fetching all the fields for this form */
        FieldService.getFieldsForForm($scope.formid).then(function(response)
        {
            console.log(response);
            $scope.displayFields = response;
        });

        $scope.availableFields = [
            {label: "Single Line Text", type: "TEXT"},
            {label: "Multi Line Text", type: "TEXTAREA"},
            {label: "Date", type: "DATE"},
            {label: "Dropdown", type: "OPTIONS"},
            {label: "Checkboxes", type: "CBOX" },
            {label: "Radio Buttons", type: "RADIO"}
        ];


        $scope.addField = addField;
        $scope.cancelField = cancelField;
        function addField(fieldType){
            var id = $scope.displayFields.length + 1;
            if(fieldType == "OPTIONS" || fieldType == "RADIO" || fieldType == "CBOX")
            {
                $scope.currFields.push({id: id, type: fieldType,options:[]});
            }
            else
            {
                $scope.currFields.push({id: id, type: fieldType});
            }

        }

         function cancelField(){

             $scope.currFields = [];
             $scope.fieldType = "";

        };

        $scope.addOption = function(field){

            field.options.push({label: "", value: ""});

        };

        $scope.saveForm = function(){

            FieldService.createFieldForForm($scope.formid,$scope.currFields).then(function(response)
            {
                console.log(response);
                $scope.displayFields = response;
            });

            //$scope.displayFields = $scope.displayFields.concat($scope.currFields);
            console.log(JSON.stringify($scope.currFields));
            $scope.fieldType = "";
            $scope.currFields=[];

        };


    }

})(); 