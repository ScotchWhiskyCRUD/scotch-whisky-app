const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        validate(value) {
          if (value.toLowerCase().includes('password')) {
            throw new Error(`Cannot use the word 'password' within your password.`);
          }
        }
    },
    likes: [{
        whisky: {
            name: { type: String } 
        }
    }]
});

module.exports = mongoose.model('User', UserSchema);

// NOTE: the two lines below are the same as line two lines above
// const User = mongoose.model('User', userSchema);
// module.exports = User;

