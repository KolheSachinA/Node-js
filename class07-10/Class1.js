class Student {
    constructor(name,rollNo,branch,city){
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
        this.city = city;
    }
    attendence(){
        return "Present Sir!"
    }


}

const a1 = new Student('sachin',12,'CSE','AURANAGBAD');
console.log(a1);
console.log(a1.attendence());

const a2 = new Student('Mike','13','mech','Kerala');
const a3 = new Student('Ross','14','ETC','Uk');
const a4 = new Student('Rachel','15','CIVIL','USA');
const a5 = new Student('Moses','16','Mech','Germany');
console.log(a2);