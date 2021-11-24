// let prompt = require('prompt-sync');
//  prompt = prompt();
// const bio = {
//                 firstName : 'Mike',
//                 lastName : 'Ruffalo',
//                 yearOfBirth : 1997,
//                 profession : 'Singer',
//                 friends : ['Rachel','Tony','silver'],

                // calAge : function(){
                //     return 2021 - this.yearOfBirth;
                // }
                // calAge : function(birthYear){
                //     return 2021-birthYear;
                // }
                 
//                 calAge : function(){
//                     this.age = 2021 - this.yearOfBirth;
//                     return this.age
                    
//                 }

// }
//console.log(bio);

//const interestedIn = prompt('What do you want to know!')
// if(bio[interestedIn]){
//     console.log(bio[interestedIn]);
// }else {
//     console.log('Invalid input!');
// }


// console.log(bio.calAge());
// console.log(bio.calAge(1997));
//console.log(bio);

//coding challenge

const mark = {
            fullName : 'Mark_Miller',
            mass : 78,
            height : 1.69,
            calBMI : function (){
                this.BMI = (this.mass/(this.height*this.height))
                return this.BMI
            }
}

const john = {
            fullName : 'John_Smith',
            mass : 92,
            height : 1.95,
            calBMI : function (){
                this.BMI = (this.mass/(this.height*this.height))
                return this.BMI
            }
}

mark.calBMI();
console.log(mark.BMI);
john.calBMI();
console.log(john.BMI);
const compare = john.BMI > mark.BMI ? `${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})` :`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} BMI (${john.BMI})`
console.log(compare);
// console.log(john.BMI > mark.BMI);
// console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})`);