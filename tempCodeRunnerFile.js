function add(...args) {
    let sum = 0;
  
    args.forEach(value => {
      sum += value;
    });
  
    return sum;
  }
  
  console.log(add(2, 3, 4, 5, 6)); //output: 20
  