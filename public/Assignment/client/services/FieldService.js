(function () {

    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);


    function FieldService($rootScope,$http,$q) {

        var fieldservice =
        {
            createFieldForForm:createFieldForForm,
            getFieldsForForm:getFieldsForForm,
            getFieldForForm: getFieldForForm,
            deleteFieldFromForm:deleteFieldFromForm,
            updateField:updateField
        };

        return fieldservice;


        function createFieldForForm(formid,field)
        {
            console.log('create a field');
            console.log(field);
            console.log('end of cliend service');
            var deferred = $q.defer();
            $http.post("/api/form/"+formid+"/field",field)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFieldsForForm(formid)
        {
            var deferred = $q.defer();
            $http.get("/api/form/"+formid+"/field")
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function getFieldForForm(formid,fieldid)
        {
            var deferred = $q.defer();
            $http.get("/api/form"+formid+"/field"+fieldid)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteFieldFromForm (formid,fieldid)
        {
            var deferred = $q.defer();
            $http.delete("/api/form"+formid+"/field"+fieldid)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function updateField(formid , fieldid)
        {
            var deferred = $q.defer();
            $http.put("/api/form"+formid+"/field"+fieldid)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
       }

    }

})();