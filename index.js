var PIXI = require("pixi.js");

var renderer = PIXI.autoDetectRenderer(480, 640);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var alien;

PIXI.loader.add("alien.png").load(function (loader, resources) {

  alien = new PIXI.Sprite(resources["alien.png"].texture);
  alien.interactive = true;
  alien.on("mousedown", function () {
    alien.y = -50;
    alien.x = Math.ceil(Math.random() * 480);
  });
  stage.addChild(alien);

  anim();
});

function anim() {
  renderer.render(stage);
  if(alien.y > 640){
    alert("Game over!");
  }else {
    alien.y++;
    requestAnimationFrame(anim);
  }

}