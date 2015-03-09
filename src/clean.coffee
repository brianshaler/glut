clean = require 'gulp-clean'

module.exports = (gulp, config) ->
  paths = []
  for name, settings of config.tasks
    switch typeof settings.dest
      when 'string'
        paths.push settings.dest
      when 'object'
        for path in settings.dest
          paths.push path
  gulp.task 'clean', ->
    gulp.src paths,
      read: false
    .pipe clean()
