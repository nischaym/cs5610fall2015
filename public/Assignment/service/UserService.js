(function () {

    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

        var users = [
            { username : "Nischay" , Password : "nischay" , email:"nischay@neu.edu"},
            { username: "Gavrav", Password: "gavrav", email: "gavrav@neu.edu" }

        ];

        var service =
        {
            getAllUsers: getAllUsers
        }

        return service;

        function getAllUsers() {
            return users;
        }
    }

})();