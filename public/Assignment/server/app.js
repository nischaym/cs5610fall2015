module.exports = function (app,mongoose,db) {


    var schema = require("./models/user.schema.js")(mongoose,db);
    console.log('in app.js');
    console.log(mongoose);
    console.log('end of app.js');

    var model = require("./models/user.model.js")(app,mongoose,db,schema);
    require("./services/user.services.js")(app,model);
    require("./services/form.services.js")(app);
    require("./services/field.services.js")(app);

};