let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);             // the increment operator increments and returns the value before incrementing.
// Expected output: "x:4, y:3"
y = x++;
console.log(`x:${x}, y:${y}`);


let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);             // the increment operator increments and returns the value after incrementing.
// Expected output: "a:4, b:4"



