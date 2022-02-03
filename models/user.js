const mongoose = require("mongoose");
//In app.js
mongoose.connect("mongodb://localhost/auth_demo");
app.use(require("express-session")({
secret:"Any normal Word",//decode or encode session
    resave: false,          
    saveUninitialized:false    
}));