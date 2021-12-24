// const mike = {
//     firstName : 'mike',
//     year : 1991,
//     calAge : function(){
//         console.log(this);
//         console.log(2021-this.year);

//         // const isMillenial = function () {
//         //     console.log(this);//this = Global object.
//         //     console.log(this.year >= 1981 && this.year <= 1996);//flase
//         //     console.log('inside millenial');
//         // };
//         const isMillenial = () => {
//             console.log(this);//mike
//             console.log( this.year >= 1981 && this.year <= 1996 );//true
//         };//inherting this value from parent scope!
//         isMillenial();
//     },
//     greet : () =>{
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     }
// }
// mike.greet();
// mike.calAge();

//arguments key
const addExpr = function(a,b) {
    console.log(arguments);
    return a+b;
}
addExpr(2,4);
addExpr(2,4,6,8);

// const addExpr = (a,b) => {
//     console.log(a+b);
//     console.log(arguments);
//     return a+b;
// }
// addExpr(2,4);
// addExpr(2,4,6,8);