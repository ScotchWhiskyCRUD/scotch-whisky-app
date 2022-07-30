const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    console.log('MIDDLEWARE', newUser);
    // await newUser.save(); // QUESTION: relevance for save() and whether it's necessary or not
    return next();
  } catch (err) {
    return next(err);
  }
}




module.exports = userController;