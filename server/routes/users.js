const express = require('express');
const userRouter = express.Router();
const {getAllUsers,addUser } = require('../controllers/users')

userRouter.get('/users', getAllUsers)
userRouter.post('/users', addUser)

module.exports = userRouter;