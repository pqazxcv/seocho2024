// let a = 1, b = 2;
let a = 1;
let b = 2;

const c = (a++, b++);
console.log("c =", c, a, b);

const d = (a--, b + a);
console.log("d =", d, a, b);
