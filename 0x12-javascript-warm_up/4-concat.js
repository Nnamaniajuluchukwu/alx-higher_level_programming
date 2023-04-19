#!/usr/bin/node
let len;
for (len = 0; process.argv[len];) {
  len++;
}
if (len === 2) {
  console.log('undefined is undefined');
} else {
  console.log(`${process.argv[2]} is ${process.argv[3]}`);
}
