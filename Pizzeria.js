var crustType = ["deep dish", "hand tossed", "thin crust", "square crust"];
var sauceType = ["traditional", "marinara", "alfredo", "light sauce"];
var cheeses = ["mozarella", "feta", "pepperjack", "provolone"];
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

var pizza = {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
};

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven(pizza.crustType[0], pizza.sauceType[0], pizza.cheeses[0], pizza.toppings[0] + ", " + pizza.toppings[1]);
var pizza2 = pizzaOven(pizza.crustType[1], pizza.sauceType[1], pizza.cheeses[0] + ", " + pizza.cheeses[1], pizza.toppings[2] + ", " + pizza.toppings[3] + ", " + pizza.toppings[4]);
var pizza3 = pizzaOven(pizza.crustType[2], pizza.sauceType[2], pizza.cheeses[2], pizza.toppings[2]);
var pizza4 = pizzaOven(pizza.crustType[3], pizza.sauceType[3], pizza.cheeses[3], pizza.toppings[3]);

console.log(pizza1);
console.log("*************************************************");
console.log(pizza2);
console.log("*************************************************");


function randomPick(arr) {     
    var i = Math.floor(arr.length * Math.random());     
    return arr[i]; 
}



function randomPizza(){
    // var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza());
