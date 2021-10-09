//Every function.
arr = [1,3,7,11,13];
arr1 = [1,3,6,4,8];
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

var out = arr.every(odd);
var out1 = arr1.every(odd);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);
console.log("----------------------------");
arr = [2,3,4,6];
arr1 = [8,2,10,14];
function even(value){
    if((value) %2==0)
        return true;
    else{
        return false;
    }
}
var out = arr.every(even);
var out1 = arr1.every(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);
