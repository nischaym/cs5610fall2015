module.exports = function (mongoose,db) {

    var UserSchema = new mongoose.Schema({
        username:String,
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        //usertitle:String,
        trips:[
                {id:String,
                 usertitle:String}
        ],
        //aboutme:String,
        profileimage:String,
        //roles:String,
        followers:[{userid:String,
        username:String}],
        following:[{userid:String,
            username:String}],
        state:String,
        city:String,
        profileimage:String
    },{collection:"users"});

    return UserSchema;
};