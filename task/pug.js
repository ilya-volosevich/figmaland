const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")
const app = require("../config/app.js")

//Плагины
const pugs = require('gulp-pug');


// Обработка PUG
const pug = () => {
    return src(path.pug.src)
        //Плагины
        .pipe(pugs(app.pug))
        .pipe(dest(path.pug.dest));
}


module.exports = pug;