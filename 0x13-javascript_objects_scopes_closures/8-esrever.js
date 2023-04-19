#!/usr/bin/node
exports.esrever = function (list) {
  const revList = [];
  for (let i = list.length; i > 0; i--) {
    revList.push(list[i - 1]);
  }
  return revList;
};
