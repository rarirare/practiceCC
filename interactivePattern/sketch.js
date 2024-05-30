let distMouse=15;
let size=10;
let cols,rows;
let offset=4;
let block=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  rows=width/size;
   cols=width/size;
  // rows=40;
  // cols=40;
  for(let i=0; i<cols;i++){
    block[i]=[];
    for(let j=0; j<rows; j++){
      block[i][j]=new Block(size/2+ i*size,size/2 +j*size);
    }
  }
}

function draw() {
  background(0);
  for(let i=0; i<cols;i++){
    for(let j=0; j<rows; j++){
      block[i][j].move();
      block[i][j].display();
    }
  }
  print(pmouseX,mouseX,pmouseY,mouseY);
  
}