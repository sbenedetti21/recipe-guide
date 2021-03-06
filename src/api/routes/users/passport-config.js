const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail) {

  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, {message: 'No user with that email was found'})
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, {message: 'Password incorrect'})
      }
    } catch (e) {
      done(e)
    }

  }

  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, authenticateUser))

  passport.serializeUser((user, done) => {
    done(null, user.email)
  })
  passport.deserializeUser(async (email, done) => {
    try {
      const user = await getUserByEmail(email)
      done(null, user)
    } catch (e) {
      done(e)
    }
  })
}

module.exports = initialize;