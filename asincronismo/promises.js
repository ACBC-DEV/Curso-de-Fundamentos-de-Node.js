function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola: " + nombre);

      resolve(nombre);
    }, 1000);
  });
}
function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla bla bla bla bla ...");
      // resolve();
      reject("error");
    }, 1000);
  });
}
function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios: " + name);
      resolve(name);
    }, 1000);
  });
}
console.log("start...");
hola("andres")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("terminamos proceso");
  })
  .catch((err) => {
    console.log(err);
  });
