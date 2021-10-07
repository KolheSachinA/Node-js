class Bike {
    constructor(cadence,gear,initalSpeed){
        this.cadence = cadence;
        this.gear = gear;
        this.speed = initalSpeed;
    }
    applyBreak(decrement){
        var decrement;
        this.speed -= decrement;
        return `Speed will be ${this.speed}`;
        // return `Break applied at ${this.speed}`
    }
    speedUp(increment){
        this.speed += increment;
        return `The speed will be after increment is ${this.speed}`;
    }
    changeGear(newValue){
            this.gear = newValue;
            return `Gear after change will be ${this.gear}`;
    }
    
}
const Honda = new Bike(10,2,30);
console.log(Honda);
console.log(Honda.applyBreak(10));
console.log(Honda.speedUp(20));
console.log(Honda.changeGear(2));
console.log("-----------------");
const Bajaj = new Bike(50,4,100)
console.log(Bajaj.applyBreak(30));
console.log(Bajaj.speedUp(10));
console.log(Bajaj.changeGear(3));
console.log("-----------------");
