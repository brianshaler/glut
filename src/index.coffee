clean = require './clean'
server = require './server'
task = require './task'
watch = require './watch'

livereload = require 'gulp-livereload'

module.exports = (gulp, config) ->
  reloader = livereload auto: true
  task gulp, name, settings for name, settings of config.tasks
  config.watch = !(config.watch == false)
  watch gulp, config if config.watch
  server gulp, config.server, config.watch, config.livereload if config.server

  defaultTask = Object.keys config.tasks
  gulp.task 'default', defaultTask, ->
  clean gulp, config
