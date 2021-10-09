//inheritance.
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
    constructor(gender,name) {
        super();
        this.gender = gender;
       this.name = name;
    }
}

const childOne = new Child('female');
console.log(childOne);
const childTwo = new Child('Male','kamal')
console.log(childTwo);

