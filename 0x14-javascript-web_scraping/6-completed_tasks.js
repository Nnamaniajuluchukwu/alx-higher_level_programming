#!/usr/bin/node
/*
    A script that computes the number of tasks completed by user id.
*/
const request = require('request');
const URL = process.argv[2];

/*
  Step 1: Create a GET request.
  Step 2: Throw the error if one occurred.
  Step 3: parse the body as Json (tasks)
  Step 4: Create an empty dictionary.
  Step 5: Loop through each tasks.
  Step 6: Check if task is completed and not present in dictionary.
  Step 7: If not present assign 1 and if present increment.
*/
request(URL, (err, res, body) => {
  if (err) throw err;
  const taskComp = {};
  const tasks = JSON.parse(body);
  // using 'of' will fetch you the task while 'in' will fetch you the index.
  for (const task of tasks) {
    if (task.completed) {
      if (taskComp[task.userId] === undefined) {
        taskComp[task.userId] = 1;
      } else {
        taskComp[task.userId]++;
      }
    }
  }
  console.log(taskComp);
});
