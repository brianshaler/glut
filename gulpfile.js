var gulp = require('gulp');
var gulplug = require('./lib');

var coffeeRunner = require('gulp-coffee');

gulplug(gulp, {
  watch: true,
  livereload: false,
  tasks: {
    coffee: {
      runner: coffeeRunner,
      src: 'src/**/*.coffee',
      dest: 'lib'
    }
  }
});
