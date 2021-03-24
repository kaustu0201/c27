class Chain {
    constructor(body1,body2){
     var option={
         bodyA:body1,
         bodyB:body2,
         stiffness:0.04,
         length:10
     }
     this.con=Matter.Constraint.create(option)
     World.add(world,this.con)
    }

    display(){
        var pointA=this.con.bodyA.position
        var pointB=this.con.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}