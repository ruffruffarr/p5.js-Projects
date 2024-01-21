let clicker
let player
let points = 0
let puppy

function preload() {
  puppy = loadImage('vincent_dog.png')
}
function setup() {
  createCanvas(400, 400);
  //Step 1: create object https://p5js.org/reference/#/p5/createVector
  clicker = createVector(150, 150)
}

function draw() {
  background("#E6B2FD");
  //Step 3: create player
  player = createVector(mouseX, mouseY)
  //Step 2: create clicker
  //square(clicker.x, clicker.y, 50)
  //circle(clicker.x, clicker.y, 50)
  image(puppy, clicker.x, clicker.y,100, 100)
  
  //Step 5: Point system
  textSize(30)
  fill('white')
  stroke(0)
  strokeWeight(5)
  text(points, 200, 50)
  
  //Step 6: Clicker Game Title
  fill('palegreen')
  text("Dog Clicker Game 🐶", 10, 370)
  
}

//Step 4 https://p5js.org/reference/#/p5/dist
function mousePressed(){
  let distance = p5.Vector.dist(player, clicker)
  if (distance < 100) {
    clicker = createVector(random(width -100), random(height - 100));
    //Step 5: point system
    points++
  }
}