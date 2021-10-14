try{
    let x =10;
   console.log(x/0);
    throw new error('check the value of denominator')
}catch(error){
    console.log(error);
}