(function() {
  var awatch, livereload;

  livereload = require('gulp-livereload');

  awatch = require('gulp-autowatch');

  module.exports = function(gulp, config) {
    var name, paths, ref, ref1, settings;
    paths = {};
    ref = config.tasks;
    for (name in ref) {
      settings = ref[name];
      paths[name] = (ref1 = settings.watch) != null ? ref1 : settings.src;
    }
    return gulp.task('watch', Object.keys(config.tasks), function() {
      var reloader;
      if (config.livereload !== false) {
        reloader = livereload({
          start: true
        });
      }
      return awatch(gulp, paths);
    });
  };

}).call(this);
