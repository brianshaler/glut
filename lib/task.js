(function() {
  var cache, errorHandler, livereload, plumber;

  cache = require('gulp-cached');

  plumber = require('gulp-plumber');

  livereload = require('gulp-livereload');

  errorHandler = require('./errorHandler');

  module.exports = function(gulp, name, settings) {
    return gulp.task(name, settings.deps, function() {
      var fn, fns, i, len, pipeline;
      fns = [];
      if (settings.runner) {
        settings.name = name;
        settings.errorHandler = errorHandler;
        fns = settings.runner(settings);
        if (!(fns instanceof Array)) {
          fns = [fns];
        }
      }
      pipeline = gulp.src(settings.src);
      if (settings.cache !== false) {
        pipeline = pipeline.pipe(cache(name));
      }
      pipeline = pipeline.pipe(plumber(errorHandler));
      for (i = 0, len = fns.length; i < len; i++) {
        fn = fns[i];
        pipeline = pipeline.pipe(fn);
      }
      pipeline = pipeline.pipe(gulp.dest(settings.dest));
      if (settings.livereload !== false) {
        pipeline = pipeline.pipe(livereload({
          auto: false
        }));
      }
      return pipeline;
    });
  };

}).call(this);
