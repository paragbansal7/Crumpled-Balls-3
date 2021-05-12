class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.body= Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA=null
    }

    display(){

        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
