const day = 'Sunday'

switch(day) {//day === "Monday"(strict comparison)
    case 'Monday':
        console.log('this is Monday!');
        break;
    case 'Tuesday':
        console.log('This is Tuesday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('this is holiday!❤❤');
        break;
    default:
        console.log('invalid input');

}

//ternary operator.
const age = 18;
age >= 18 ? console.log('You can drive!') : console.log('You cannot drive car!');
//coding challenge

const bill = 430
const tip = bill<= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20
console.log(tip+bill);
