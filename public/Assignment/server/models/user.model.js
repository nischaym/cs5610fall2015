
var users = require("./user.mock.json");

module.exports = function(app){

    var api;
    api = {
        create: create,
        findAll: findAll,
        findById: findById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        update: update,
        remove: remove
    };

    return api;

    function create(user){

        var newUser = user;
        newUser.lastname = "";
        newUser.firstname = "";
        newUser.userid = users.length + 1;
        users.push(user);
        return(user);
    }

    function findAll(){

        return(users);
    }

    function findById( userid){

        /*Check for the user in the mock list */
        var user;
        for (var i=0;i < users.length;i++)
        {
            if (users[i].userid == userid)
            {
                user = users[i];
                break;
            }
            else
            {
                /*Do Nothing */
            }
        }
        return(user);
    }

    function update(userid,user){

        //var user = null;
        for (var i=0;i < users.length;i++)
        {
            if (users[i].userid == userid)
            {
                users[i].username = user.username;
                users[i].password = user.password;
                users[i].email = user.email;
                users[i].firstname = user.firstname;
                users[i].lastname = user.lastname;
                break;
            }
            else
            {
                /*Do Nothing */
            }
        }
        user.userid = userid;
        return(user);
    }

    function remove(userid){

        for (var i=0;i<users.length;i++)
        {
            if (users[i].userid == userid)
            {
                users.splice(i, 1);
                break;
            }
        }
        //ca_fn(users);
        return(users);
   }


    /* specific to User Object*/

    function findUserByUsername( username){

        var user = null;
        for(var i =0;i<users.length;i++)
        {
            if (users[i].username == username)
            {
                user = users[i];
                break;
            }
        }
        return(user);
    }


    function findUserByCredentials( username , password){

        var user = null;
        for(var i =0;i<users.length;i++)
        {
            if (users[i].username == username && users[i].password == password)
            {
                user = users[i];
                break;
            }
        }
        return(user);
    }

};