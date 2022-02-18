const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")
const app = require("../config/app.js")


//Плагины
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');



// Обработка html
const html = () => {
    return src(path.html.src)
        //Плагины
        .pipe(fileinclude())
        .pipe(size({title: "До сжатия"}))
        .pipe(size({title: "После сжатия"}))
        .pipe(dest(path.html.dest))
}

module.exports = html;