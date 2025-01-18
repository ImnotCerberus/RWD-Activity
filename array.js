const fruits = ['pineapple', 'grape', 'watermelon', 'banana', 'durian' ]

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

const filterFruits = fruits.filter(fruit => fruit === 'pineapple');
console.log(filterFruits);

const findFruit = fruits.find(fruit => fruit === 'pineapple');
console.log(findFruit);

const findFruitIndex = fruits.findIndex(fruit => fruit === 'pineapple');
console.log(findFruitIndex);

fruits.forEach(fruit => console.log(fruit +"s"));

const hasPineapple = fruits.includes('pineapple');
console.log(hasPineapple);

const indexOfApple = fruits.indexOf('apple');
console.log(indexOfApple);

const fruitsString = fruits.join(', ');
console.log(fruitsString);

const fruitsKeys = fruits.keys();
console.log(fruitsKeys.next().value);

const lastIndexOfPineapple = fruits.lastIndexOf('pineapple');
console.log(lastIndexOfPineapple);