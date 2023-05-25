#!/usr/bin/node
/*
    A script that gets the contents of a webpage and stores it in a file.
*/
const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const filename = process.argv[3];

/*
  Step 1: Create a GET request.
  Step 2: Throw the error if one occurred.
  Step 3: Write to the file, the body of the webpage
  Step 4: Throw error if one occurred.
*/
request(URL, (err, res, body) => {
  if (err) throw err;
  fs.writeFile(filename, body, 'utf-8', err => {
    if (err) throw err;
  });
});
