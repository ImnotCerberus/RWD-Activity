const firstName = "Leandro";
const lastName = "Lazareto";

let val;

val = firstName + " " + lastName;
console.log(val);

val = "Sorry, you don\'t deserve love, ";
val += "Goodbye";
console.log(val);

val = 'You\'re a certified douchebag :)';
console.log(val);

val = firstName.length;
console.log(val);

val = firstName.concat(' ', lastName);
console.log(val);

val = firstName.toUpperCase();
console.log(val);

val = firstName[0];
console.log(val);

val = firstName.indexOf('l');
console.log(val);

val = firstName.charAt(2);

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 2);
console.log(val);

const str = "Hello World";
val = str.split(' ');
console.log(val);

val = str.replace('World', 'There');
console.log(val);

val = str.includes('Hello');
console.log(val);