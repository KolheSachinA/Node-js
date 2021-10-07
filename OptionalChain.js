const person = {
        name : 'Sachin',
        age  : 24,
        Vehicle :{
            manafacure(){
                    return "Manafacture is:"
            },
            year :2019,
            Brand : {
                    first :'Honda',
                    second :'Suzuki'
            }
        }
}

const VehicleBrand = person.Vehicle?.Brand?.first;
console.log(VehicleBrand);
console.log(person.Vehicle?.manafacure?.());