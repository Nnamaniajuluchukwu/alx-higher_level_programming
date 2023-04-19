#!/usr/bin/node
let len;
for (len = 0; process.argv[len];) {
  len++;
}
if (len === 2) {
  console.log('Missing size');
} else {
  const num = parseInt(process.argv[2], 10);
  if (Number.isInteger(num)) {
    for (let i = 0; i < num; i++) {
      let letX = 'X';
      for (let j = 1; j < num; j++) {
        letX += 'X';
      }
      console.log(letX);
    }
  } else {
    console.log('Missing size');
  }
}
