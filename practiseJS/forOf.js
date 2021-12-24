const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]  
for(let item of menu) {
    console.log(item);
}
for(let [i,ele] of menu.entries()){
    console.log(`${i+1}   : ${ele}`);
}
console.log(restaurant.startMenu.open);
