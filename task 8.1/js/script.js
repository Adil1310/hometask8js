let a = prompt("Enter your name");
let b = prompt("Enter the name of your hometown");
let c = prompt("Enter your age")


function myFunc(a, b, c) {
  let result = [a, b, c];
  let abc = result.join(', ');
  return abc;
}
 
console.log(myFunc(a, b, c));