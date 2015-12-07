(function () {

    angular
        .module("TripTorque")
        .factory("UserService", UserService);
        

    function UserService($rootScope,$http,$q) {

        var users = [];


        //var i;
        //$rootScope.user = { userid:"", username: "", password: "" , email : "", firstname : "" , lastname :"" };
        var service =
        {
            //getAllUsers: getAllUsers ,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findUserByUserId: findUserByUserId,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,

            //updateUserDetails:updateUserDetails

        };

        return service;

        function getAllUsers()
        {
            return users;
        }

        function findUserByUserId(userid)
        {
            var deferred = $q.defer();
            $http.get("/api/user/"+userid)
                .success(function(response){

                    deferred.resolve(response);
                });
            return deferred.promise;
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

        function updateUser(user)
        {

            var deferred = $q.defer();
            $http.put("/api/user/"+user.id ,user)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;

        }

        //function updateUserDetails(userid,title,aboutme)
        //{
        //    var deferred = $q.defer();
        //    $http.put("/api/user/"+userid ,user)
        //        .success(function(response){
        //            deferred.resolve(response);
        //        });
        //    return deferred.promise;
        //
        //}

    }

})();