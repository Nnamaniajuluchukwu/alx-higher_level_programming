#!/usr/bin/node
/*
  A script that prints all characters of a Star Wars movie.
*/
const request = require('request');
const id = process.argv[2];
const URL = `https://swapi-api.alx-tools.com/api/films/${id}`;
/*
  Step 1: Create a GET request.
  Step 2: Throw the error if one occurred.
  Step 3: Get the results in json format,
  getting all the characters from the film requested.
  Step 4: loop through every character link and get the name of the char.
  Step 5: Print the characters.
*/
request(URL, (error, response, body) => {
  if (error) throw error;
  const filmChars = JSON.parse(body).characters;
  for (const character of filmChars) {
    request(character, (err, res, bdy) => {
      if (err) throw err;
      console.log(JSON.parse(bdy).name);
    });
  }
});
