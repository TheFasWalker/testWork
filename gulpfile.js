const { series } = require('gulp');

let gulp = require('gulp'),
    scss = require('gulp-sass')(require('sass')),
    fileinclude = require("gulp-file-include"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries");

    // компилируем scss в css
gulp.task('compile-scss', function () {
    return gulp.src('proj/public/scss/style.scss')
        .pipe(scss({
            outputStyle: "expanded"
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 4 versions"],
            cascade: true
        }))
        .pipe(group_media())
        .pipe(gulp.dest('proj/public/css'))
});
// сборка html
gulp.task('compile-html', function () {
    return gulp.src(['proj/public/html-blocks/*.html' , "!" + 'proj/public/html-blocks/_*.html'])
        .pipe(fileinclude({
            prefix: '@@',
         basepath: '@file'
        }))
        .pipe(gulp.dest('proj/'))
})

function watchCanges() {
    gulp.watch('proj/public/scss/**/*.scss', gulp.series('compile-scss'));
    gulp.watch('proj/public/html-blocks/*.html', gulp.series('compile-html'));
}

gulp.task('default', gulp.series(watchCanges))