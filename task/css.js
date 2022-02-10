const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")
const app = require("../config/app.js")
const cssimport = require("gulp-cssimport")
const autoprefixer = require("gulp-autoprefixer")


//Плагины
const concat = require('gulp-concat');


// Обработка css
const css = () => {
    return src(path.css.src, {sourcemaps: true})
        //Плагины
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(autoprefixer())
        .pipe(dest(path.css.dest, {sourcemaps: true}));
}


module.exports = css;