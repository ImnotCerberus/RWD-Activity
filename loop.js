for (let i = 5; i > 0; i--) {
    if (i > 3){
    console.log(i)
    }else{
        console.log("i is less than 3");
    }
    i > 3 ? console.log(i) : console.log("i is less than 3");
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let x = 0;
do {
    console.log(x);
    x++;
}
while (x < 5);

const fruits = ['apple', 'banana', 'orange', 'grapes', 'tangerine', 'green apple'];
for (let fruit of fruits) {
    console.log(fruit);
}

const fruitLength = fruits.map(fruit => fruit.length);
console.log(fruitLength);

const users = [
    {name: 'Kathlyn', age: 17},
    {name: 'Alliah', age: 19},
    {name: 'Leandro', age: 19},
]

const userNames = users.map(user => user.name);
console.log(userNames);