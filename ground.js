class Ground
{
    constructor(x,y,w,h){
    var options= {isStatic:true
                      }

    this.width=w;
    this.height=h;
    this.xpos=x;
    this.ypos=y;
    this.body= Bodies.rectangle(this.xpos,this.ypos,this.width,this.height,options);
     World.add(world,this.body);
    }
     display() {
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

     }
}

