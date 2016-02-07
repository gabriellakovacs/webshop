var gulp = require("gulp"),
    sass = require('gulp-sass');
    // uglify = require("gulp-uglify");

// //minify js files
// gulp.task("jsmin", function() {
//   return gulp.src("./src/js/*.js")
//     .pipe(uglify())
//     .pipe(gulp.dest("./dist/js"));
// });

 //compile sass files
gulp.task('sass', function () {
  gulp.src('css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 

//compile sass files on the go
gulp.task('sasswatch', function () {
  gulp.watch('css/*.scss', ['sass']);
});


// //compress images
// gulp.task('imgmin', () => {
//     return gulp.src('./src/images/**/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('dist/images'));
// });

