// Generated by CoffeeScript 1.4.0
(function() {
  var async, fs, wait, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  fs = require('fs');

  _ref = require("../toolbox"), wait = _ref.wait, async = _ref.async;

  module.exports = (function() {

    function exports(path, options) {
      this.path = path;
      this.write = __bind(this.write, this);

      this.close = __bind(this.close, this);

      this.outStream = fs.createWriteStream(this.path, {
        flags: 'w'
      });
    }

    exports.prototype.close = function(cb) {
      this.outStream.end();
      this.outStream.destroySoon();
      return async(cb);
    };

    exports.prototype.write = function(position, material) {
      var x, y, z;
      if (material.id === 0) {
        return;
      }
      x = position[0], y = position[1], z = position[2];
      return this.outStream.write("" + x + " " + y + " " + z + "\n");
    };

    return exports;

  })();

}).call(this);
