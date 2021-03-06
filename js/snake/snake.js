(function (root) {
  var Game = root.Game = (root.Game || {});

  var Snake = Game.Snake = function(size) {
    this.dir = "N";
    this.segments = [[Math.floor(size/2), Math.floor(size/2)]];
  };

  Snake.prototype.move = function() {
    var headRow = this.segments[this.segments.length - 1][0];
    var headCol = this.segments[this.segments.length - 1][1];

    switch (this.dir) {
    case "N":
      this.segments.push([headRow - 1, headCol]);
      break;
    case "E":
      this.segments.push([headRow, headCol + 1]);
      break;
    case "S":
      this.segments.push([headRow + 1, headCol]);
      break;
    case "W":
      this.segments.push([headRow, headCol - 1]);
      break;
    }
  };

  Snake.prototype.shrink = function() {
    this.segments.shift();
  };

  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  };

})(this);
