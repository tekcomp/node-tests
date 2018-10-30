var db = require('./db.js');

module.exports.handleSignup = (email, password)  => {
    //Check if email exist
    //Save user to the databse
    db.SaveUser({
        email: email,
        password: password
    });
    //Send welcome email
};