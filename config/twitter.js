var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy

passport.use(new TwitterStrategy({
        consumerKey: "46krMG9oKqlK0GU9D2RLbtRk0",
        consumerSecret: "a0BmqjHFnz3VgMh8rvyNryDJ8KwFtt7JdmzgGuLkJ0kFJqdPgN",
        callbackURL: process.env.TWITTER_CALLBACK
    },
    function (accessToken, secretToken, refreshToken, profile, cb) {
        return cb(null, profile)
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (twit, cb) {
    cb(null, twit);
});