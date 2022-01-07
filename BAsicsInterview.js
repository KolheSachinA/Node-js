console.log('start of program')
const wait = () => {
    setTimeout(()=>{
        console.log('I will run after 3 sec.');
    },3000)
}
wait()
console.log('End of program');

let promiseOne = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Sucesss!')
    }, 3000);
})

const newFun = async() =>{
    console.log('Start of asycn function!');
    let result = await promiseOne
    console.log(result);
    console.log('End of Async function!');
}

newFun();

const spreadArr = (a,b,c) =>{
    return a+b+c;
}

const arr = [1,2,3];
console.log(spreadArr(...arr));

//copy array

const arr1 = [1,2,3,4];
const arr2 = [5,6,7];
const arr3 = [...arr1,...arr2];
console.log(arr3);

const arr4 = [...arr2];
arr4.push(4);
console.log(arr4);
console.log(arr2);

class fruit {
    
}

class mango extends fruit {

}

const person = {
    fname : 'Mike',
    age : 18,
    isMarried : true,
    address : function() {
        
        return `Hi I am ${this.fname} my age is ${this.age}  and my address is NewYork.`
    }
}

console.log(person.address());