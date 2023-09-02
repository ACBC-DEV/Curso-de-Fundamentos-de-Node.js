// const process = require("process");

process.on("beforeExit", () => {
  console.log("el proceso va terminar");
});
process.on("exit", () => {
  console.log("acbc, el proceso acabo");
});
// process.on("uncaughtRejection");
process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  console.error(err);
});
process.on("");
functionquenoexiste();
console.log("after the error");
