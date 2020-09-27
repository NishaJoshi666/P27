class constraint{
  constructor(pointB,bodyA){
   var options = {
     bodyA: bodyA,
     pointB: pointB
   }
     this.pointB = pointB;
     this.cons = Constraint.create(options);
     World.add(world, this.cons);
  } 
  
  display(){
     var pointA = this.cons.bodyA.position;
     var pointB = this.pointB;
     fill("green");
     line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
};




  




