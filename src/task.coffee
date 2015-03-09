cache = require 'gulp-cached'
plumber = require 'gulp-plumber'
livereload = require 'gulp-livereload'
errorHandler = require './errorHandler'

module.exports = (gulp, name, settings) ->
  # console.log 'task:', name, settings
  gulp.task name, settings.deps, ->
    fns = []
    if settings.runner
      settings.name = name
      settings.errorHandler = errorHandler
      fns = settings.runner settings
      fns = [fns] unless fns instanceof Array
    pipeline = gulp.src settings.src
    unless settings.cache == false
      #console.log 'cache', name
      pipeline = pipeline.pipe cache name
    pipeline = pipeline.pipe plumber errorHandler
    for fn in fns
      pipeline = pipeline.pipe fn
    pipeline = pipeline.pipe gulp.dest settings.dest
    unless settings.livereload == false
      pipeline = pipeline.pipe livereload auto: false
    pipeline
