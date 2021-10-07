const vehicle = {
            Brand : 'Maruti',
            LaunchDate : 1997,
            speed : '120Km/hr',
            changeSpeed(){
                return 'speed is changed!'
            },
            Model :[
                'swift',
                'ertiga',
                'dzire'
            ]
}
console.log(vehicle);
console.log(typeof(vehicle));
console.log(vehicle.Model[0]);
console.log(vehicle.changeSpeed());
