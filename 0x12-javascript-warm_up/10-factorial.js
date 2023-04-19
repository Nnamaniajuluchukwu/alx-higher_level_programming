#!/usr/bin/node
function factorial (num) {
  if (num === 1 || num === 0 || !num) {
    return (1);
  } else {
    return (num * factorial(num - 1));
  }
}

const a = parseInt(process.argv[2], 10);
const ans = factorial(a);
console.log(ans);
