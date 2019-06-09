const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
    return src('src/*.js')
        .pipe(babel())
        .pipe(src('vendor/*.js'))
        .pipe(dest('output/'))  // 中途输出
        .pipe(uglify())  // 再压缩
        .pipe(rename({extname: '.min.js'})) // 输出文件名改一下
        .pipe(dest('output/')) // 输出
}

// glob作为src dest等函数的参数是用来匹配文件的
// glob中使用/来分隔文件路径，尽管windows的路径是\\，我们也用/(因为\\在glob中被认为是转义)
// 也不要使用path.join, __dirname, __filename, process.cwd这些node方法或关键字，里面使用了\\