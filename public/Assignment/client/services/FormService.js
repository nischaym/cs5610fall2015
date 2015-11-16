(function () {

    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService)

    function FormService ($http , $q)
    {

        var form_temp = [];

        var formservice =
        {
            createFormForUser: createFormForUser,
            findAllFormsForUser:findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            //allForms : allForms

        }

        return formservice;

        function createFormForUser(userid, form)
        {
            var deferred = $q.defer();
            $http.post("/api/form/"+userid+"/form",form)
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
       }


        function findAllFormsForUser (userid)
        {
            var deferred = $q.defer();
            $http.get("/api/form/"+userid+"/form")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteFormById (id)
        {
            var deferred = $q.defer();
            $http.delete("/api/form/"+id)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }


        function updateFormById(id ,newForm )
        {
            console.log('im in update');
            console.log(newForm);
            var deferred = $q.defer();
            $http.put("/api/form/"+id,newForm)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;

        }

    }
})();