var PIXI = require("pixi.js");

function Placar(params) {

  var ptext;
  var pts;

  this.load = function () {
    pts = 0;
    ptext = new PIXI.Text("" + pts, { fill: "white" });
    ptext.x = 10;
    ptext.y = 600;
    params.stage.addChild(ptext);
  };

  this.scoreUp = function () {
    pts++;
    ptext.text = pts;
  };
}

module.exports = Placar;