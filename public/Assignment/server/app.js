module.exports = function (app,mongoose,db) {


    var schema = require("./models/user.schema.js")(mongoose,db);
    //console.log('in app.js');
    //console.log(mongoose);
    //console.log('end of app.js');

    var model = require("./models/user.model.js")(app,mongoose,db,schema);
    require("./services/user.services.js")(app,model);

    var FormSchema = require("./models/form.schema.js")(mongoose,db);
    var model = require("./models/form.model.js")(app,mongoose,db,FormSchema);
    require("./services/form.services.js")(app,model);
    //console.log(model);
    //console.log(FormSchema);
    require("./services/field.services.js")(app,model);

};