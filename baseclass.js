class BaseClass{
    constructor(x, y, width, height, colour) {
        var options = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.colour = colour;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        fill(this.colour);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}