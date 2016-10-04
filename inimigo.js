var PIXI = require("pixi.js");

function Inimigo(params) {

  this.params = params;
  var alien;

  this.preload = function (loader) {
    loader.add(params.atlas);
  };

  function hit() {
    alien.y = -50;
    alien.x = Math.ceil(Math.random() * 480);
    params.points.scoreUp();
  }

  this.load = function (loader, resources) {
    var frames = []
    for (var i in params.seqanim)
      frames.push(resources[params.atlas].textures[params.seqanim[i]]);
    alien = new PIXI.MovieClip(frames);
    alien.interactive = true;
    alien.animationSpeed = 0.1;
    alien.play()
    alien.on("mousedown", hit);
    alien.on("touchstart", hit);
    params.stage.addChild(alien);
  };

  var over = false;
  this.update = function () {
    if (!over) {
      if (alien.y > 640) {
        over = true;
        alert("Game over!");
      } else {
        alien.y++;
      }
    }
  };
}

module.exports = Inimigo;