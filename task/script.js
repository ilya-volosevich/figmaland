const {src, dest} = require("gulp");

//Конфиги

const path = require("../config/path.js")



// Обработка js
const script = () => {
    return src(path.js.src)
        .pipe(dest(path.js.dest));
}


module.exports = script;