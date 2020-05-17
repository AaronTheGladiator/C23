class Ground {

    constructor() {

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(200, 375, 400, 10, options);

        World.add(world, this.body);

    }

    displayg() {
        var lmao = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(lmao.x, lmao.y, this.width, this.height);
    }

}