(function() {
  var gutil;

  gutil = require('gulp-util');

  module.exports = function(err) {
    console.error(err);
    gutil.beep();
    return gutil.log(err.stack);
  };

}).call(this);
