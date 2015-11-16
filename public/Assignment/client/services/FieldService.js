(function () {

    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);


    function FieldService($rootScope,$http,$q) {

        var service =
        {
            getAllFields: getAllUsers ,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser

        };

        return service;

        function getAllUsers()
        {
            return users;
        }

        function findAllUsers(cb_fn)
        {
            cb_fn(users);
        }

        function findUserByUsernameAndPassword(username , password )
        {
            var deferred = $q.defer();
            $http.get("/api/user?username="+username+"&password="+password)
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function createUser(user)
        {
            var deferred = $q.defer();
            $http.post("/api/user",user)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteUserById (userid,ca_fn)
        {
            for (var i=0;i<users.length;i++)
            {
                if (users[i].userid == userid)
                {
                    users.splice(i, 1);
                    break;
                }
            }
            ca_fn(users);

        }

        function updateUser(userid , user)
        {

            var deferred = $q.defer();
            $http.put("/api/user/"+userid ,user)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;

        }

    }

})();