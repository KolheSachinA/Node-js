//inheritance.
let x1 = ('001',0);
console.log(x1);

class Parent {
    constructor () {
        this.name = 'Raj';
        this.age = 67
    }

    getAddress () {
        return `${this.name} with age ${this.age} lives in Hyderabad`;
    }
}

class Child extends Parent {
    constructor(gender) {
        super();
        this.gender = gender;
    }
}

const childOne = new Child('male');
console.log(childOne);