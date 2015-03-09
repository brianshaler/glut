livereload = require 'gulp-livereload'
nodemon = require 'nodemon'

module.exports = (gulp, settings, watch, lr) ->
  # console.log 'task: server'
  gulp.task 'server', (['watch'] if watch), (cb) ->
    console.log 'starting livereload, i think..'
    unless lr == false
      reloader = livereload start: true
    nodemon settings
    nodemon.once 'start', cb
    nodemon.on 'start', ->
      console.log 'Server has started'
      setTimeout ->
        reloader.write path: '*'
      , 750
    nodemon.on 'quit', ->
      console.log 'Server has quit'
    nodemon.on 'restart', (files) ->
      console.log 'Server restarted due to:', files
    return
