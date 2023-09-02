const fs = require("fs");

function read(ruta, cb) {
  fs.readFile(ruta, (err, data) => cb(data.toString()));
}
function write(ruta, text, cb) {
  fs.writeFile(ruta, text, (err) => {
    if (err) console.error(err);
    else cb("OK");
  });
}
function borrar(ruta, cb) {
  fs.unlink(ruta, (err) => {
    if (err) console.error(err);
    else cb("OK");
  });
}

// read(__dirname + "/archivo.txt", console.log);
// write(__dirname + "/archivo1.txt", 'asdad', console.log);
// borrar(__dirname + "/archivo1.txt", console.log);
