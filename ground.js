class Ground  {

  constructor(x, y, width, height) {
    var options = {
        isStatic: true,
        'restitution':0.3,
        'friction':0.2,
        'density':0.2,
    }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
    
       World.add(world, this.body);
  }
  display(){
       var pos =this.body.position;
       var  angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       fill ("brown")
       rotate(angle);
       pop();
  }
}