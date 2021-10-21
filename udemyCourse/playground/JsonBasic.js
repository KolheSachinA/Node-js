const Bike = {
    model : 'fz-s',
    release : 2005,
    parent : 'Yamaha',
    feature:{
            gear : 5,
            topSpeed :120
    }
}
console.log(Bike);
console.log(Bike.release);
console.log(Bike.feature);
Bike.feature.rpm=600;
console.log(Bike.feature);
console.log("--------");
 const BikeString = JSON.stringify(Bike);

 console.log(BikeString);
 console.log(BikeString.model);//undefined
BikeOb  = JSON.parse(BikeString);
console.log(BikeOb.model);