#!/usr/bin/node
let len;
for (len = 0; process.argv[len];) {
  len++;
}
if (len === 2) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
