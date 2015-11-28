module.exports = function (mongoose,db) {

    var FormSchema = new mongoose.Schema({
        id:String,
        title:String,
        userid:String,
        fields:[{id:String,
            label:String,
            fieldtype:String,
            placeholder:String,
            options:[
                {label:String,
                    value:String}
            ]
            }]
    });

    //var UserModel = mongoose.model("UserModel" , UserSchema);
    return FormSchema;
};