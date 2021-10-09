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
const honda = new Bike(10,2,30);
console.log(honda);
console.log(honda.applyBreak(10));
console.log(honda.speedUp(20));
console.log(honda.changeGear(2));
console.log("-----------------");
const bajaj = new Bike(50,4,100)
console.log(bajaj.applyBreak(30));
console.log(bajaj.speedUp(10));
console.log(bajaj.changeGear(3));
console.log("-----------------");

