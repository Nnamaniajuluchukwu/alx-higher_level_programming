#!/usr/bin/node
/* a script that prints the title of a Star
Wars movie where the episode number matches a given integer */

/*
  Step 1: Create a request module.
  Step 2: Create the url link.
  Step 3: Create a GET request.
  Step 4: Throw error if found.
  Step 5: Paste the body as Json and print the title.
*/
const request = require('request');
const URL = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;
request(URL, (err, res, body) => {
  if (err) throw err;
  console.log(JSON.parse(body).title);
});
