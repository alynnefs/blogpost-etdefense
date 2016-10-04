var PIXI = require("pixi.js");

var renderer = PIXI.autoDetectRenderer(480, 640);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var alien;

var points;

PIXI.loader.add("alien.json").load(function (loader, resources) {

  var pts = 0;
  points = new PIXI.Text("" + pts, { fill: "white" });
  points.x = 10;
  points.y = 600;
  stage.addChild(points);

  var frames = []
  frames.push(PIXI.Texture.fromFrame("alien_down1"));
  frames.push(PIXI.Texture.fromFrame("alien_down0"));
  frames.push(PIXI.Texture.fromFrame("alien_down1"));
  frames.push(PIXI.Texture.fromFrame("alien_down2"));
  alien = new PIXI.MovieClip(frames);
  alien.interactive = true;
  alien.animationSpeed = 0.1;
  alien.play()
  alien.on("mousedown", function () {
    alien.y = -50;
    alien.x = Math.ceil(Math.random() * 480);
    pts++;
    points.text = pts;
  });
  stage.addChild(alien);

  anim();
});

function anim() {
  renderer.render(stage);
  if (alien.y > 640) {
    alert("Game over!");
  } else {
    alien.y++;
    requestAnimationFrame(anim);
  }

}