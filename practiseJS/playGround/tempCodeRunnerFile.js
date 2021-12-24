async function example() {
    const result = await myPromise;

}

const myPromsie = () => {
    return new Promise((resolve, reject) => {
        let condition;
        if (condition) {
            resolve('sucess!');
        } else {
            reject('failed!')
        }
    })
}

example();