// Vars

var html = require('gulp-htmlmin');

// htmlmin

gulp.task('html', function(){
  return gulp.src('./src/index.html')
    .pipe(html({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist/'));
});

// defaultTask

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask