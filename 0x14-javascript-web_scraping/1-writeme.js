#!/usr/bin/node
// Write to a file.

/*
  Step 1: Create a file module.
  Step 2: Create the filename.
  Step 3: words to write.
  Step 4: Write the words into the file.
  Step 5: Throw error if found.
*/
const fs = require('fs');
const filename = process.argv[2];
const words = process.argv[3];
fs.writeFile(filename, words, 'utf-8', err => {
  if (err) throw err;
});
