#!/usr/bin/node
// Get status code.

/*
  Step 1: Create a request module.
  Step 2: Create the url link.
  Step 3: Create a GET request.
  Step 4: Throw error if found.
  Step 5: Print the response statusCode.
*/
const request = require('request');
const URL = process.argv[2];
request(URL, (err, res, body) => {
  if (err) throw err;
  console.log(`code: ${res.statusCode}`);
});
