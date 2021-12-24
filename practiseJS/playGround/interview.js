const myPromise = () => {
    return new Promise((resolve, reject) => {
        let condition = false;
        if (condition) {
            resolve('sucess!');
        } else {
            reject('failed!')
        }
    })
}
async function example() {
    try {
        const result = await myPromise();
        console.log(result);
    } catch (e) {
        console.log(e);
    }


}


example()

//Algorithm
// i have 2000000 trnasactions in last 60 days

// form various queries instead of one

// loop will run for 20 times(2000000/100000 = 20)

// loop start
// 	using limit keyword in mongo restrics that only 100000 transactions are pulled in one go
// 	skip value is 0, 
// 	convert json array to csv and write into csv file(emailId+date.zip)
// loop end

// you will put your file in the server and you will give the link to download 



// one after another

// You will implement queue - npm module better-queue
