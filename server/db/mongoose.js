const mongoose = require('mongoose');
const uri = require("../.config/dev");

mongoose.connect("mongodb+srv://linoy:oCZToQ9yiDbNsnzh@bankapi.tflnd.mongodb.net/mybank?retryWrites=true&w=majority", {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true
})