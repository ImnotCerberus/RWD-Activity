const fruits = ['pineapple', 'grapes', 'watermelon', 'banana', 'durian' ]

console.log(fruits);
console.log(fruits[0]);

const vegs = ['pechay', 'potato', 'radish'];
const fruitsAndvegs = fruits.concat(vegs);
console.log(fruitsAndvegs);

const copyFruits = fruits.copyWithin(2, 0);
console.log(copyFruits);

const fruitsIterator =  fruits.entries();
console.log(fruitsIterator.next().value);

const isAllFruits = fruits.every(fruit => typeof fruit === 'string');
console.log(isAllFruits);

const fillFruits = fruits.fill('watermelon', 2, 4);
console.log(fillFruits);

const filterFruits = fruits.filter(fruit => fruit === 'pineapple');
console.log(filterFruits);

const findFruit = fruits.find(fruit => fruit === 'pineapple');
console.log(findFruit);

const findFruitIndex = fruits.findIndex(fruit => fruit === 'pineapple');
console.log(findFruitIndex);