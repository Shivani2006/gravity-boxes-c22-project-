class Box{
    constructor(x,y,length,breadth){
        var options = {
            'restitution': 0,
            'friction':0.1,
            'density':0.2
        }
        
        this.body = Bodies.rectangle(x,y,length,breadth,options);
        this.length = length;
        this.breadth = breadth;
        World.add(world,this.body);
    } 
   
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
         push();
        //translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(100);
        rect(this.body.position.x,this.body.position.y,this.length,this.breadth);
        pop();
    }
};