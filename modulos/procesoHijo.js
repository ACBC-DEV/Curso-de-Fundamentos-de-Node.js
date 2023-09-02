const { exec, spawn } = require("child_process");

// exec("node modulos/consola.js", (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//   console.log(stdout);
// });
let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on("data", (data) => {
  console.log("¿Esta Muerto?");
  console.log(proceso.killed);
  console.log(data.toString());
});
proceso.on("exit", () => {
  console.log("El proceso ha salido");
  console.log(proceso.killed);
});
