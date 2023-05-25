#!/usr/bin/node
// Read the file and print its contents.

/*
  Step 1: Create a file module.
  Step 2: Create the filename.
  Step 3: Read words from a file.
  Step 4: Throw error if found.
  Step 5: print data from file.
*/
const fs = require('fs');
const filename = process.argv[2];
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
