const mongoose = require('mongoose');

const uri = "mongodb+srv://linoy:<password>@bankapi.tflnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})