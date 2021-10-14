//Function overriding.
class Employee{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    getName(){
        return `name is ${this.fname} and lastname is ${this.lname}`
    }
}
class Manager extends Employee{
    constructor(fname,lname,level,rating){
        super(fname,lname,);
        this.level = level;
        this.rating = rating;
    }
    getName(){
        return `name is ${this.fname}  lastname is ${this.lname} ,rating is ${this.rating} and level is ${this.level}`
    }
}
const Mike = new Manager('Mike','Wadra','L-3','12');
console.log(Mike.getName());