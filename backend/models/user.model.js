var mongoose = require("mongoose");
Schema = mongoose.Schema;
bcrypt = require("bcrypt");
SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
    email: {type : String, required: true, index: { unique: true}, trim : true},
    username: {type : String, required: true, index: { unique: true}, trim : true},
    password: {type : String, required: true}
});

userSchema.pre("save", function(next) {
    var user = this;

    if (!user.isModified("password")) return next();

    //generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        //hash the password using salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            //override the password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//module.export allows file reading when called
const User = mongoose.model("User", userSchema);
module.exports = User;