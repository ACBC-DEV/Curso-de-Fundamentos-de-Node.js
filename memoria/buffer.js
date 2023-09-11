// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3, 4]);
let buffer = Buffer.from("Hola");
// console.log(buffer);

// ------------------------------

let acb = Buffer.alloc(26);
console.log(acb);
for (let i = 0; i < 26; i++) {
  acb[i] = i + 97;
}
console.log(acb.toString());
