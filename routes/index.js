var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    user: req.user
  });
});

router.get('/auth/twitter', passport.authenticate('twitter'))
router.get('/logout', passport.authenticate('twitter', {
  failureRedirect: '/'
}), function (req, res) {
  res.redirect('/')
})

module.exports = router;