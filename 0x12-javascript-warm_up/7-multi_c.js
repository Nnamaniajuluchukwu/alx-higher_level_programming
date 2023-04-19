#!/usr/bin/node
let len;
for (len = 0; process.argv[len];) {
  len++;
}
if (len === 2) {
  console.log('Missing number of occurrences');
} else {
  const num = parseInt(process.argv[2], 10);
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      console.log('C is fun');
    }
  }
}
