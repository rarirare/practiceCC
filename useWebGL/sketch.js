let size=50;
let cols;
let rows;
let b;
let boxes;
function setup() {
   createCanvas(600, 600,WEBGL);
   cols=width/size;
   rows=height/size;
   // b=new Box(0,0);
   for(let i=0;i<cols;i++){
      boxes[i]=[];
      for(let j=0;j<rows;j++){
         boxes[i][j]=new Box(size/2+i*size -size*cols/2, size/2+j*size - size*rows/2);
      }
   }
 }
 
 function draw() {
   background(220);

   for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
         boxes[i][j].display();
         
      }
   }
   
  console.log(boxes);
   // fill(255,0,0);
   // box(50);

 }