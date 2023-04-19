#!/usr/bin/node
let len;
for (len = 0; process.argv[len];) {
  len++;
}
if (len === 2) {
  console.log('Not a number');
} else {
  const digit = parseInt(process.argv[2], 10);
  if (Number.isInteger(digit)) {
    console.log(`My number: ${digit}`);
  } else {
    console.log('Not a number');
  }
}
