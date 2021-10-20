//Command Line Argument:
console.log("This is window!");
//To access argument passed in CommandLine.
const command = process.argv[2];
if(command === 'add'){
    console.log("Added successfully!");
}else if(command === 'remove'){
    console.log("remove successfully!");
}