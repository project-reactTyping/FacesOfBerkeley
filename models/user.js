const mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var userSchema = new Schema({

    local            : {
        email        : String,
        first_name   : String,
        last_name    : String,
        password     : String,
        email        : String,
        picture      : String,
        friends      : [],
        followers    : [],
        todo         : String
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
var newUser = mongoose.model('newUser', userSchema);

module.exports = newUser;
