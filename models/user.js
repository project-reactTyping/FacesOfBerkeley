const mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    Profile      : {
        first_name   : {
            type: String,
            trim: true,
            required: "First Name is Required"
        },
        last_name    : {
            type: String,
            trim: true,
            required: "Last Name is Required"
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
                return input.length >= 5;
              },
              "Password should be at least 5 characters."
            ]
    },
        picture      : String,
        friends      : [],
        followers    : [],
        todo         : [],
        userCreated: {
            type: Date,
            default: Date.now
          }
        },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
var User = mongoose.model('Profile', userSchema);

module.exports = User;
