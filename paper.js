class Paper
{
    constructor(x,y,w,h){
    var options= {isStatic:false,
                  restitution:0.3,
                  friction:0.5,
                  density:1.2};
    this.width=w;
    this.height=h;
    this.xpos=x;
    this.ypos=y;
    this.body= Bodies.circle(this.xpos,this.ypos,this.width,this.height,options);
     World.add(world,this.body);
    }
     display() {
        var pos=this.body.position;
        push() 
        fill("yellow");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop()


    }
}