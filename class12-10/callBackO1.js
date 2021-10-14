const student = [{name:'sachin',course:"Python"},{name:'teja',course:"JS"}];

function enrolledStud(student1,callback){
    setTimeout(() => {
        student.push(student1);
        console.log(`${student1.name} is enrolled for the course ${student1.course}`);
        callback();
    }, 2000);
}

function readEnrolled(){
   setTimeout(() => {
       student.forEach((student)=>{
            console.log(student);
       });
   }, 3000);
}
let newStudent = {name:'Anuradha',course:'Cosmotology'}
enrolledStud(newStudent,readEnrolled);