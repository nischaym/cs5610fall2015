(function () {

    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService)
        

    function UserService() {

        var users = [
            { userid : 0001, username : "Nischay" , password : "nischay" , email:"nischay@neu.edu"},
            { userid : 0001, username: "Gavrav", password: "gavrav", email: "gavrav@neu.edu" }

        ];

        var service =
        {
            getAllUsers: getAllUsers ,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser

        }

        return service;

        function getAllUsers()
        {
            return users;
        }

        function findUserByUsernameAndPassword(username , password , ca_fn)
        {
            for(var i; i< users.length ;i++)
            {
                if (username == users[i].username)
                {
                    ca_fn(user[i]);
                    break;
                }
                else 
                {
                    if (i+1 == users.length)
                    {
                        ca_fn(null);
                    }
                    else 
                    {
                        /*do nothing*/
                    }
                }
            }
        }

        function findAllUsers(ca_fn)
        {
            ca_fn(users);
        }

        function createUser(user,ca_fn)
        {
            users[users.length].id = 0;
            users[users.length].username = user.username;
            ca_fn(users[users.length]);
        }

        function deleteUserById (userid,ca_fn)
        {
            for (var i=0;i<users.length;i++)
            {
                if (users[i].userid == userid)
                {
                    user.username = null;
                    user.password = null;
                }
            }
            ca_fn(users);

        }

        function updateUser(userid , user , ca_fn)
        {
            for(var i=0;i<users.length;i++)
            {
                if (users[i].userid == userid)
                {
                    users[i] = user;
                    break;
                }
            }
        }

    }

})();