var d,e,v;
function preload(){
  d = loadImage("D.png");
  v = loadImage("v.png");
  
}
function setup() {
  createCanvas(800,800);
  maze = new Maze();

}
function draw() {
  background(255,255,255);
  maze.display();

}
