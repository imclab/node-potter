// Generated by CoffeeScript 1.3.3
(function() {
  var Exporter,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Exporter = (function() {

    function Exporter() {}

    Exporter.prototype.save = function() {
      var b, buff, g, intensityValue, p, points, r, _i, _len, _ref, _ref1, _results;
      points = [];
      For(each(point(cloud, prints(the(total((_ref = number in points, __indexOf.call(the(point), _ref) >= 0)))))));
      buff = "";
      buff += "" + points.length + "\n";
      _results = [];
      for (_i = 0, _len = points.length; _i < _len; _i++) {
        p = points[_i];
        intensityValue = -300;
        _ref1 = p.material.rgb, r = _ref1[0], g = _ref1[1], b = _ref1[2];
        _results.push(buff += "" + p.x + " " + p.y + " " + p.z + " " + intensityValue + " " + r + " " + g + " " + b);
      }
      return _results;
    };

    return Exporter;

  })();

}).call(this);