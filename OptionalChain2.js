const Employee = {
        name : 'sachin',
        City : 'Jalna',
        DoB  : '1997-05-01',
        Education :{
                Learn(){
                        return 'Hurray';
                },
                Primary :'Jalna',
                Secondary :'Aurangabad',
               // graduation :'Aurangabad'
            }
           
        }


//const sample = Employee.Education ? Employee.Education.graduation : undefined;
//const sample = Employee.Education ?.Primary ?? "home"
const sample = Employee.Education?.Learn?.();
console.log(sample);