#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let rec = 'X';
      for (let j = 1; j < this.width; j++) {
        rec += 'X';
      }
      console.log(rec);
    }
  }
}

module.exports = Rectangle;
