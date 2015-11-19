(function () {

    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope , FieldService ,$location,$rootScope,$routeParams,FormService)
    {
        $scope.user = {};
        $scope.user.userid = $routeParams.userid;
        $scope.formid = $routeParams.id;
        var user = $rootScope.user;
        $scope.currFields = [];
        $scope.displayFields = [];
        $scope.form ={};
        $scope.form.title = "";
        $scope.forms = [];

        FormService.findAllFormsForUser($scope.user.userid).then(function(response){
            console.log(response);
            console.log('asfadfadfdf');
            $scope.forms = response;
        });


        for(var j =0;j< $scope.forms.length;j++)
        {
            if($scope.forms[j].id == $scope.formid)
            {
                $scope.form.title = $scope.forms[j].title;
                break;
            }
        }
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
        $scope.removeField = removeField;

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

        }

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

        function removeField(index){

            console.log(index);
            var fieldid = $scope.displayFields[index].id;
            console.log(fieldid);
            console.log('remove');
            FieldService.deleteFieldFromForm($scope.formid ,fieldid).then(function(response )
            {
                //$scope.displayFields = response;
                if(response == true)
                {
                    FieldService.getFieldsForForm($scope.formid).then(function(response)
                    {
                        console.log('i have returned');
                        console.log(response);
                        $scope.displayFields = response;
                    });

                }


            });

        }

    }

})(); 