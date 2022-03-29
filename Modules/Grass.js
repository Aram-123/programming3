var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class Grass extends LivingCreature {
    constructor(x,y) {
        super(x,y);
    }
    mul(){
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if(this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0],newCell[1]);
            grassArray.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}
