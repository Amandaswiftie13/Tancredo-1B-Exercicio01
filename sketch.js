function setup() {
  createCanvas(600, 600);
  background("red");
}

function draw() {
fill("black");
  stroke("yellow");
              
  if(mouseIsPressed){
 rect(mouseX,mouseY,30, 40);
  }
}