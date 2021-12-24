console.log(this);

const calAge = function (birthYear) {
console.log(2021-birthYear);
console.log(this);//Global Objects.
}
calAge(1991);

const calAgeArrow = (birthYear) => {
    console.log(2021-birthYear);
    console.log(this);
}
calAgeArrow(1997);

const mike = {
    year : 1991,
    calAge : function () {
        console.log(this);
        console.log(2021-this.year);
    }
}
mike.calAge();//jonas object and 30

const rachel = {
    year : 2000
}

rachel.calAge = mike.calAge;
rachel.calAge();//rachel object and 20