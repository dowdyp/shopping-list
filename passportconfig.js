const bcrypt = require("bcryptjs");
const User = require("./models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
      new LocalStrategy((email, password, done) => {
          console.log(email, password, done);
        User.findOne({ email: email }, (err, user) => {
          if (err) console.log(err);
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) console.log(err);
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      })
    )

  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser((id, callback) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      callback(err, userInformation);
    });
  });
};
