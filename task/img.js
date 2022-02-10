const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")
const app = require("../config/app.js")
const cssimport = require("gulp-cssimport")
const autoprefixer = require("gulp-autoprefixer")


//Плагины
const imagemin = require("gulp-imagemin");



// Обработка css
const img = () => {
    return src(path.img.src)
        //Плагины
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(dest(path.img.dest));
}


module.exports = img;