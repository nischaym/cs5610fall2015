(function () {

    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

        var users = [
            { username : "Nischay" , Password : "nischay"},
            { username: "gavrav", Password: "gavrav" }

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