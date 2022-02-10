const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create()
const path = require("./config/path.js");

// Задачи

const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js')
const img = require('./task/img.js')


//Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

//Наблюдатель
const watcher = () => {
    watch(path.pug.watch, pug).on("all", browserSync.reload)
    watch(path.scss.watch, scss).on("all", browserSync.reload)
    watch(path.img.watch, img).on("all", browserSync.reload)
}   

//Задачи
exports.pug = pug;
exports.scss = scss;
exports.img = img;


//Сборка
exports.dev = series(clear,
    parallel(pug, scss, img),
    parallel(watcher, server));

exports.build = series(clear,
        parallel(pug, scss, img),
        );

