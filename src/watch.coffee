livereload = require 'gulp-livereload'
awatch = require 'gulp-autowatch'

module.exports = (gulp, config) ->
  paths = {}
  for name, settings of config.tasks
    paths[name] = settings.watch ? settings.src
  #console.log 'watch', paths
  gulp.task 'watch', Object.keys(config.tasks), ->
    unless config.livereload == false
      reloader = livereload start: true
    awatch gulp, paths
