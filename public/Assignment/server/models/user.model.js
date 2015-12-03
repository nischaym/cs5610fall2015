
var q = require("q");
//var UserSchema = require("./user.schema.js");


var uuid = require('uuid');
module.exports = function(app,mongoose,db,UserSchema){

    //console.log('printing mongoose');
    //console.log(mongoose);
    //console.log('printing db');
    //console.log(db);

    //var UserSchema = new mongoose.Schema({
    //    userid:String,
    //    username:String,
    //    firstname:String,
    //    lastname:String,
    //    email:String,
    //    Password:String
    //
    //},{collection:"usermodel"});

    var UserModel = mongoose.model("UserModel" , UserSchema);
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

        //console.log('before adding');
        //console.log(user);
        var uuid1 = uuid.v1();
        var newUser = user;
        //console.log(uuid1);
        newUser.userid = uuid1;//users.length +1;

        var deferred = q.defer();
        UserModel.create(newUser,function(err , user){
            deferred.resolve(user);
        });
        return deferred.promise;
        //users.push(newUser);
        //return(newUser);
    }

    function findAll(){

        var deferred = q.defer();
        UserModel.find(function(err , result){
            deferred.resolve(0);
        });
        return deferred.promise;
    }

    function findById( uid){

        /*Check for the user in the mock list */
        //var user;

        var deferred = q.defer();
        UserModel.find({userid:uid},function(err , result){
            deferred.resolve(0);
        });
        return deferred.promise;

        //
        //for (var i=0;i < users.length;i++)
        //{
        //    if (users[i].userid == userid)
        //    {
        //        user = users[i];
        //        break;
        //    }
        //    else
        //    {
        //        /*Do Nothing */
        //    }
        //}
        //return(user);
    }

    function update(userid,user){

        var deferred = q.defer();

        console.log(user);
        console.log(userid);

        UserModel.update({userid:userid},{$set:{firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password,username:user.username}},function(err , user){
           UserModel.find({userid:userid},function(err , user){
                console.log('after update');
                console.log(user);
                deferred.resolve(user);
            });
        });
        return deferred.promise;

        //var user = null;
        //for (var i=0;i < users.length;i++)
        //{
        //    if (users[i].userid == userid)
        //    {
        //        users[i].username = user.username;
        //        users[i].password = user.password;
        //        users[i].email = user.email;
        //        users[i].firstname = user.firstname;
        //        users[i].lastname = user.lastname;
        //        break;
        //    }
        //    else
        //    {
        //        /*Do Nothing */
        //    }
        //}
        //user.userid = userid;


        //return(user);
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


        var deferred = q.defer();
        UserModel.find({username:username},function(err , user){
            deferred.resolve(user);
        });
        return deferred.promise;

    }


    function findUserByCredentials( username , password){


        console.log(username);
        console.log(password);
        var deferred = q.defer();
        UserModel.find({username:username, password:password},function(err , user){

            deferred.resolve(user);
        });
        return deferred.promise;
    }

};