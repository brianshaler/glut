(function() {
  var clean, livereload, server, task, watch;

  clean = require('./clean');

  server = require('./server');

  task = require('./task');

  watch = require('./watch');

  livereload = require('gulp-livereload');

  module.exports = function(gulp, config) {
    var defaultTask, name, ref, reloader, settings;
    reloader = livereload({
      auto: true
    });
    ref = config.tasks;
    for (name in ref) {
      settings = ref[name];
      task(gulp, name, settings);
    }
    config.watch = !(config.watch === false);
    if (config.watch) {
      watch(gulp, config);
    }
    if (config.server) {
      server(gulp, config.server, config.watch, config.livereload);
    }
    defaultTask = Object.keys(config.tasks);
    gulp.task('default', defaultTask, function() {});
    return clean(gulp, config);
  };

}).call(this);
