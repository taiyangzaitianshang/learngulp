const { series } = require('gulp');

// private  call by public series
function clean(cb) {
    cb();
}

// public
function build(cb) {
    cb()
}

exports.build = build;
exports.default = series(clean, build);