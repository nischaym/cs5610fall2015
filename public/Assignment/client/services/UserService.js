(function () {

    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService)
        

    function UserService($rootScope) {

        var users = [
            { userid : 1, username : "Nischay" , password : "nischay" , email:"nischay@neu.edu" , firstname : "Nischaygowda" ,lastname : "m"},
            { userid:  2, username: "Gavrav", password: "gavrav", email: "gavrav@neu.edu", firstname: "Ga", lastname: "G" }

        ];
        //var i;
        $rootScope.user = { userid:"", username: "", password: "" , email : "", firstname : "" , lastname :"" };
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

        function findAllUsers(cb_fn)
        {
            cb_fn(users);
        }

        function findUserByUsernameAndPassword(username , password , cb_fn)
        {
            for(var i=0; i< users.length ;i++)
            {
                if (username == users[i].username && (password == users[i].password))
                {
                    cb_fn(users[i]);
                    break;
                }
                else 
                {
                    if (i+1 == users.length)
                    {
                        cb_fn(null);
                    }
                    else 
                    {
                        /*do nothing*/
                    }
                }
            }

        }

        function createUser(user, cb_fn)
        {
            user.userid = users.length + 1;
            users.push(user);
            cb_fn(user);
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

        function updateUser(userid , user , cb_fn)
        {
            for(var i=0;i<users.length;i++)
            {
                if (users[i].userid == userid)
                {
                    users[i].username = user.username;
                    users[i].password = user.password;
                    users[i].email = user.email;
                    users[i].firstname = user.firstname;
                    users[i].lastname = user.lastname;
                    cb_fn(users[i]);
                    break;
                }
            }
        }
        
    }

})();