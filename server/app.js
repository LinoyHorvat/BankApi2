const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
require('./models/users')

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));

app.use(express.json());

app.post('/users', (req, res)=>{
  res.send('test')

  user.save().then(()=>{
    res.send(user)
  }).catch(err => {res.send(err)});

})
app.listen(port, () => {
  console.log('listening on port ' + port);
});



