let x,y;
let angle=0;
let r=150;
let shiftingAngle=[];
let numAxis=5;
let x2=[];
let y2=[];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
//   create angle list so to create axis shift grid
  for(let i=0; i<numAxis; i++){
    shiftingAngle[i]=i*90/numAxis;  
  }
}

function draw() {
  background(78,134,200);
  stroke(255);
  // angle=map(mouseX,0,width,0,360);
  
//   translate o,o to width/2, height/2 so to start drawing from centre of the page
  translate(width/2,height/2);
  
//   draw bigger circle
  noFill();
  ellipse(0,0,r*2,r*2);

// draw smaller black cirle that rotate over circumference of bigger circle
  x=r*cos(angle);
  y=r*sin(angle);
  
  fill(0);
  ellipse(x,y,20,20);
  
//   create loop to draw more circle along different shifted axix
  for(let i=0; i<numAxis; i++){
    x2[i]=r*cos(angle+shiftingAngle[i]);
    y2[i]=r*sin(angle+shiftingAngle[i]);
    
//     use push and pop function every time we rotating axis it should be rotated from origin axix not from previous axis.
    push();
    rotate(-shiftingAngle[i]);

    line(-r,0,r,0);
    line(0,-r,0,r)
    
    fill(255);
    ellipse(x2[i],0,20,20);
    ellipse(0,y2[i],20,20);
    pop();
  }
  angle+=1
}