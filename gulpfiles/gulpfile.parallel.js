const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

// series为顺序执行，parallel为并发执行，可以相互嵌套
exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish
)