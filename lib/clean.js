(function() {
  var clean;

  clean = require('gulp-clean');

  module.exports = function(gulp, config) {
    var i, len, name, path, paths, ref, ref1, settings;
    paths = [];
    ref = config.tasks;
    for (name in ref) {
      settings = ref[name];
      switch (typeof settings.dest) {
        case 'string':
          paths.push(settings.dest);
          break;
        case 'object':
          ref1 = settings.dest;
          for (i = 0, len = ref1.length; i < len; i++) {
            path = ref1[i];
            paths.push(path);
          }
      }
    }
    return gulp.task('clean', function() {
      return gulp.src(paths, {
        read: false
      }).pipe(clean());
    });
  };

}).call(this);
