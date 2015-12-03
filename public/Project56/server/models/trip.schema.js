module.exports = function (mongoose,db) {

    var TripSchema = new mongoose.Schema({
        userid:String,
        tripimageurl:String,
        content:String,
        summary:String,
        rating:Number,
        noofratings:Number,
        createddate:{type:Date, default:Date.now},
        Comments:[{commentid:String}],
        title:String
    },{collection:"trips"});

    return TripSchema;
};