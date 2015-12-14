var q = require("q");
module.exports = function(app,mongoose,db,UserSchema){


    var UserModel = mongoose.model("UserModel" , UserSchema);
    var api;
    api = {
        create: create,
        getAllUsers: getAllUsers,
        findById: findById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        update: update,
        removeUserById: removeUserById,
        findUserByUserId:findUserByUserId,
        addFollower:addFollower
    };

    return api;

    function create(user){
        var deferred = q.defer();
        var newUser = user;
        console.log('i reached model');
        console.log(newUser);
        UserModel.create(newUser,function(err , user){
            deferred.resolve(user);
            console.log('resp');
            console.log(user);
        });
        return deferred.promise;
    }

    function findUserByUserId(userid){

        var deferred = q.defer();
        UserModel.findById(userid,function(err , user){
            deferred.resolve(user);
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
        console.log('inside model update');
        console.log(user);
        console.log(userid);

        //UserModel.update({_id:userid},{$set:{title:user.title,aboutme:user.aboutme}},function(err , user){
        //   UserModel.find({_id:userid},function(err , user){
        //        console.log('after update');
        //        console.log(user);
        //        deferred.resolve(user);
        //    });
        //});

        UserModel.findByIdAndUpdate(userid,{$set:{firstname:user.firstname,lastname:user.lastname,email:user.email,city:user.city,state:user.state}},function(err , user){
           UserModel.findById(userid,function(err , user){
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

    function removeUserById(userid){

        var deferred = q.defer();
        UserModel.remove({_id:userid},function(err , result){
            deferred.resolve(result);
        });
        return deferred.promise;
    }


    /* specific to User Object*/

    function findUserByUsername( username){


        var deferred = q.defer();
        UserModel.find({username:username},function(err , result){
            deferred.resolve(result);
        });
        return deferred.promise;

    }


    function findUserByCredentials( username , password){
        console.log('just before finding');
        console.log(username);
        console.log(password);
        var deferred = q.defer();
        UserModel.find({username:username, password:password},function(err , user){
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function getAllUsers(){

        var deferred = q.defer();
        UserModel.find(function(err , results){
            deferred.resolve(results);
        });
        return deferred.promise;

    }

    function addFollower(userid,follower){

        var deferred = q.defer();
        UserModel.find({_id:userid},function(err , doc){

            var local_follower ={
                userid:follower.userid,
                username:follower.username
            };
            doc = doc[0];
            doc.followers.push(local_follower);
            doc.save(function( err , result){
                console.log('after adding follower');
                console.log(result);
                /* now adding to the follower's data i.e. to his following */
                UserModel.find({_id:follower.userid},function(err,doc){

                    doc = doc[0];
                    var local_following ={
                        userid:userid,
                        username:follower.following
                    };

                    doc.following.push(local_following);
                    doc.save(function(err,result){

                        console.log('after adding the follower');
                        console.log(result);

                        UserModel.find({_id:userid},function(err,user){
                            console.log(user);
                            deferred.resolve(user);
                        })

                    });

                });

            });
        });
        return deferred.promise;


    }
};