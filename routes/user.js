// Generated by CoffeeScript 1.6.1
(function() {

  exports.loginIndex = function(req, res) {
    return res.render("login");
  };

  exports.login = function(req, res) {
    var password, username;
    username = req.body.userName;
    password = req.body.password;
    return res.redirect('/admin');
  };

}).call(this);
