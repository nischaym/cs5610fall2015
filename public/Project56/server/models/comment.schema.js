module.exports = function (mongoose,db) {

    var CommentSchema = new mongoose.Schema({
        userid:String,
        username:String,
        tripid:String,
        content:String
    },{collection:"comments"});

    return CommentSchema;
};