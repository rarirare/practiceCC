let distMouse=15;
let size=10;
let cols,rows;
let offset=4;
let block=[];
function setup() {
    //create canvas size
  createCanvas(windowWidth, windowHeight/2);
//   to make center as referece to draw rectangle
  rectMode(CENTER);
//   to make Degree as input value
  angleMode(DEGREES);
  rows=width/size;
   cols=width/size;
  
//    create block cols*rows size and store in block 2d array
  for(let i=0; i<cols;i++){
    block[i]=[];
    for(let j=0; j<rows; j++){
      block[i][j]=new Block(size/2+ i*size,size/2 +j*size);
    }
  }
}

function draw() {
  background(0);
//   use itteration to gow through each block to render
  for(let i=0; i<cols;i++){
    for(let j=0; j<rows; j++){
      block[i][j].move();
      block[i][j].display();
    }
  }
  print(pmouseX,mouseX,pmouseY,mouseY);
  
}