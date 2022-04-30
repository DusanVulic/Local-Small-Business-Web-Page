const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

const terser = require("gulp-terser");

const cleanCSS = require("gulp-clean-css");

const { src, series, parallel, dest, watch } = require("gulp");

function copyHTML() {
    return src("src/*.html").pipe(gulp.dest("dist"));
}

function imgTask() {
    return src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
}

function jsTask() {
    return gulp
        .src("./src/script/script.js")
        .pipe(terser())
        .pipe(gulp.dest("dist/script"));
}

function cssTask() {
    return gulp
        .src("src/css/style.css")
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("dist/css"));
}

exports.copyHTML = copyHTML;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.cssTask = cssTask;

exports.default = parallel(copyHTML, imgTask, jsTask, cssTask);

//  npm install gulp-terser --save-dev        <-- javascript
//  npm install gulp-clean-css --save-dev     <--css
//  npm install --save-dev gulp-imagemin      <-- images