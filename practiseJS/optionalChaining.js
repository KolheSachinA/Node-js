const userAdmin = {
    fname: "Mike",
    lname: "Joester",
    Address: {
        country: 'India',
        state: 'MH',
        District: 'Aurangabad',
        Bio(fname) {
            return `I am ${this.fname} and I live in ${this.country}`
        }
    },
    admin () {
        return `i am admin!`
    }
}
const userGuest = {};
const evaluate = userAdmin.admin ?.();
const evaluate1 = userGuest.admin ?.();
console.log(evaluate);
console.log(evaluate1);//undefined

//spread and rest operator.
console.log(Math.max(1,3,5));
console.log(Math.max([1,3,5]));
console.log(Math.max(...[1,3,5]));

const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, 
                    laugh: () => {console.log("😂".repeat(5))
                    }}
objectFour.laugh() // 😂😂😂😂😂
