const User = require('../models/users')

const getAllUsers = async (req, res)=>{
  try {
    const users = await User.find()
    res.status(200).send(users);
  }
  catch (err) {
    res.status(400).send(err);
  }}

  const addUser = async (req, res)=>{
    const {userId, cash, credit} = req.body
    const user = new User({userId, cash, credit})
    try {
      await user.save();
      res.status(200).send(user);
    }
    catch(err) {
      res.status(400).send(err);}
  }

  module.exports = {getAllUsers, addUser}