(function() {
  var livereload, nodemon;

  livereload = require('gulp-livereload');

  nodemon = require('nodemon');

  module.exports = function(gulp, settings, watch, lr) {
    return gulp.task('server', (watch ? ['watch'] : void 0), function(cb) {
      var reloader;
      console.log('starting livereload, i think..');
      if (lr !== false) {
        reloader = livereload({
          start: true
        });
      }
      nodemon(settings);
      nodemon.once('start', cb);
      nodemon.on('start', function() {
        console.log('Server has started');
        return setTimeout(function() {
          return reloader.write({
            path: '*'
          });
        }, 750);
      });
      nodemon.on('quit', function() {
        return console.log('Server has quit');
      });
      nodemon.on('restart', function(files) {
        return console.log('Server restarted due to:', files);
      });
    });
  };

}).call(this);
