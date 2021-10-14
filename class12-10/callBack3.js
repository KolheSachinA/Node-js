function doSomethingAsync(callfunction) {
    setTimeout(callfunction, 1000);//
    console.log('call first asynchronously');
}
doSomethingAsync(function () {
    console.log('Done');
});
setTimeout(function () {
    console.log("This message is shown after 3 seconds");
}, 3000);
console.log('call second');
