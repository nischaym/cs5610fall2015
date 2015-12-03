module.exports = function (mongoose,db) {

    var TripSchema = new mongoose.Schema({
        userid:String,
        username:String,
        tripimageurl:String,
        content:String,
        summary:String,
        rating:Number,
        noofrating:Number,
        createddate:{type:Date, default:Date.now},
        Comments:[{commentid:String}]
    });

    return TripSchema;
};