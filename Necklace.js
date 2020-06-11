function setup() {
  createCanvas(800, 800);
  background(255);
  translate(width/2,height/2);
  stroke(40);
  noFill();

  n=32; R=2*height/5;
  a=PI/n;
  r=(-cos(a)-sin(a)**2+sin(a)*sqrt(cos(a)**2+2*cos(a)+sin(a)**2))/(sin(a)**2-1)
  
  A=createVector(R*cos(a+0),R*sin(a+0));
  B = createVector(R*cos(a+2*PI/n),R*sin(a+2*PI/n));
  s=(A.dist(B))/2;
  
  for(j=0; j<30; j++){
     for(let i=0; i<n; i++){
     A=createVector(r**j*R*cos(a*(2*i+j)),r**j*R*sin(a*(2*i+j)));     
      ellipse(A.x,A.y,2*r**j*s);
    } //end for i
  } //end for j
}
