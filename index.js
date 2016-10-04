var PIXI = require("pixi.js");
var Inimigo = require("./inimigo");
var Placar = require("./placar");

var renderer = PIXI.autoDetectRenderer(480, 640);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var points = new Placar({
  stage: stage
});

var alien = new Inimigo({
  seqanim: ["alien_down1", "alien_down0", "alien_down1", "alien_down2"],
  atlas: "alien.json",
  points: points,
  stage: stage
});

alien.preload(PIXI.loader);

PIXI.loader.load(function (loader, resources) {  
  alien.load(loader, resources);
  points.load();
  anim();
});

function anim() {
  renderer.render(stage);
  alien.update()
  requestAnimationFrame(anim);
}