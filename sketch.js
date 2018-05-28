var img;
var vid;
var canvas;

function preload() {
  vid = createVideo('do.mp4');
  vid.hide();
  vid.loop();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(000);
  
  rotateX(frameCount * 0.01);
  texture(vid);
  plane(windowWidth, windowHeight);
  
  rotateX(frameCount * 0.01);
  texture(vid);
  plane(windowWidth, windowHeight);
}