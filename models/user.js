const mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name   : {
        type: String,
        trim: true,
        required: true
    },
    last_name    : {
        type: String,
        trim: true,
        required: true
    },
    email        : {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    password     : {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length <= 5;
          },
          "Password should be at least 5 characters."
        ]
    },
    friends      : [],
    followers    : [],
    todo         : [],
    post         : [],
    userCreated: {
        type: Date,
        default: Date.now
    }
});

// generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// create the model for users and expose it to our app
var User = mongoose.model('User', userSchema);

module.exports = User;
