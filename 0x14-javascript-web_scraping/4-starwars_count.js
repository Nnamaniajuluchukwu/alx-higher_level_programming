#!/usr/bin/node
/*
  a script that prints the number of movies
  where the character “Wedge Antilles” is present.
*/
const request = require('request');
const URL = process.argv[2];
/*
  Step 1: Create a GET request.
  Step 2: Throw the error if one occurred.
  Step 3: Get the results in json format.
  Step 4: Get all the characters from each film. {[characters], [characters]..}
  Step 5: Map and Filter each list of characters by cheacking for ID 18.
  Step 6: Remove all empty list with no found values.
  Step 7: Print the length.
*/
request(URL, (err, res, body) => {
  if (err) throw err;
  const films = JSON.parse(body).results
    .map(film => film.characters)
    .map(character => character.filter(charMov => charMov.includes('18')))
    .filter(list => list.length !== 0);
  console.log(films.length);
});
