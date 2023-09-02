async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola: " + nombre);

      resolve(nombre);
    }, 1000);
  });
}
async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla bla bla bla bla ...");
      // resolve();
      resolve();
    }, 1000);
  });
}
async function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios: " + name);
      resolve(name);
    }, 1000);
  });
}

async function main(name) {
  await hola(name);
  await hablar();
  await hablar();
  await adios(name);
}
console.log("starts");
main("hector");
console.log("ends");
