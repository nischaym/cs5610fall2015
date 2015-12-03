module.exports = function (mongoose,db) {

    var TripSchema = new mongoose.Schema({
        userid:String,
        username:String,
        tripimageurl:String,
        content:String,
        rating:Number,
        noofrating:Number,
        Comments:[{commentid:String}]
    });

    return TripSchema;
};