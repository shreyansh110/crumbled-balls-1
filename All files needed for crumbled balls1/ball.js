class Ball{
constructor(x,y,radius){

var options={
    isStatic:false,
    'restitution':1.2,
    'friction':0.8,
    'density':0.4
   


}

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius;
World.add(world,this.body)







}

display(){
var pis=this.body.position
push();
translate(pis.x,pis.y)
ellipseMode(RADIUS);
fill(225);
circle(0,0,this.radius)
pop();


}




































}