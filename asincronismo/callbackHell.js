function hola(nombre, miCallback) {
  console.log("Hola , " + nombre);
  setTimeout(() => {
    // console.log("estoy asincrona");
    miCallback(nombre);
  }, 1000);
}
function hablar(callback) {
  setTimeout(() => {
    console.log("bla bla bla bla bla bla bla ...");
    callback();
  }, 1000);
}
function adios(name, otraCallback) {
  setTimeout(() => {
    console.log("adios :" + name);
    otraCallback();
  }, 1000);
}
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
hola("Hector", (name) => {
  conversacion(name, 2, () => console.log("proceso terminado"));
});
// console.log("start");
// hola("hector", function (name) {
//   hablar(function () {
//     adios(name, function () {
//       console.log("termino :" + name);
//     });
//   });
// });
