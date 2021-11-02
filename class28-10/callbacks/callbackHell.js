const getRollNo = () => {
    setTimeout(() => {
        console.log('Fetching roll no:');
        let roll_No = [1, 2, 3, 4];
        console.log(roll_No);
        setTimeout((rollNo) => {
            const bioData = {
                name: 'sachin',
                age: 24
            }
            console.log(`My roll no is ${rollNo}.My name is ${bioData.name} and my age is ${bioData.age}`);
            setTimeout(() => {
                bioData.gender = 'Male'
                console.log(`My roll no is ${rollNo}.My name is ${bioData.name} and my age is ${bioData.age} and gender is ${bioData.gender}`);

            }, 3000);
        }, 3000, 2)
    }, 3000)
}

getRollNo();