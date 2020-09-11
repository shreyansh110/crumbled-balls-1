class Stick{
constructor(x,y){

 var options={
'restition':0.8,
'friction':0.3,
'density':1.0

}

this.body=Bodies.rectangle(x,y,50,10,options)
this.width=50
this.height=10
World.add(world,this.body)





}
display(){
var pas =this.body.position;
Push();
translate(pas.x,pas.y)
restMode(CENTER)
strokeWeight(4);
Fill(255)
rect(0,0,this.width,this.height);
Pop();




}




}