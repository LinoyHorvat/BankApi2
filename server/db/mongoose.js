const mongoose = require('mongoose');

const uri = "mongodb+srv://linoy:oCZToQ9yiDbNsnzh@bankapi.tflnd.mongodb.net/mybank?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})