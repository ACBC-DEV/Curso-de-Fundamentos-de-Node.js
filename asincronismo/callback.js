function hola(nombre, miCallback) {
  console.log("Hola , " + nombre);
  setTimeout(() => {
    console.log("estoy asincrona");
    miCallback(nombre);
  }, 1000);
}
function adios(name, otraCallback) {
  setTimeout(() => {
    console.log("adios :" + name);
    otraCallback();
  }, 1000);
}
console.log("start");
hola("hector", function (name) {
  adios(name, function () {
    console.log("termino");
  });
});
