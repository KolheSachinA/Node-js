//find function.
arr = [2,4,6,8,10];
arr1 = [2,3,4,7,8];
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}
let out = arr.find(odd);
let out1 = arr1.find(odd);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);
console.log("---------------------------");
//forEach function.
var arr = ['Iron' ,'Man', 'is','the','best avenger'];
arr.forEach(function(value) {
    console.log(value);
});
//Copy of array.
arrr=arr.slice();
console.log(arrr);