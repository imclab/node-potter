// Generated by CoffeeScript 1.3.3
(function() {
  var async, wait;

  wait = exports.wait = function(t) {
    if (t == null) {
      t = 0;
    }
    return function(f) {
      return setTimeout(f, t);
    };
  };

  async = exports.async = function(f) {
    return setTimeout(f, 0);
  };

}).call(this);