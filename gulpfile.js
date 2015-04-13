var gulp = require('gulp');
var glut = require('./lib');

var coffeeRunner = require('gulp-coffee');

glut(gulp, {
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
