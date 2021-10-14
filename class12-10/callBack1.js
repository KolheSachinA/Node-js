const student =[{name:'sachin',course:'Python'},
               {name:'Pankaj',course:'Javascript'}];

function getEnrolled(students,callback){
        setTimeout(() => {
            student.push(students);
            console.log(`${students.name} is enrolled`);
            callback();
        }, 2000);
}
function readRecord(){
    setTimeout(() => {
        let str = "";
        student.forEach(function(student){
            str =student.name;
            console.log(student);
        });
        console.log("Student has been enrolled!"+str);
    }, 5000);
}
let newStudent = {name:'Harry',course:'js'};

getEnrolled(newStudent,readRecord)
