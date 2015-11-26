module.exports = function (mongoose,db) {

    var UserSchema = new mongoose.Schema({
        userid:String,
        username:String,
        firstname:String,
        lastname:String,
        email:String,
        password:String

    });

    //var UserModel = mongoose.model("UserModel" , UserSchema);
    return UserSchema;
};