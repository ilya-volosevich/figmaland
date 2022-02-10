const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")
const app = require("../config/app.js")
const autoprefixer = require("gulp-autoprefixer")
const sass = require("gulp-sass")(require("sass"));


//Плагины
const concat = require('gulp-concat');


// Обработка scss
const scss = () => {
    return src(path.scss.src, {sourcemaps: true})
        //Плагины
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest(path.scss.dest, {sourcemaps: true}));
}


module.exports = scss;