gutil = require 'gulp-util'

module.exports = (err) ->
  console.error err
  gutil.beep()
  gutil.log err.stack
