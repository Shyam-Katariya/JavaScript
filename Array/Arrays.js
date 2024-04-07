//TODO: ||  Array Methods ~~> 

const numbers = new Array(1,2,3,4,5)
const array = ["Ram", "Shyam", "Dev"];

numbers.push(6);
//? console.log(numbers);
numbers.pop();
//? console.log(numbers);

//* Different methods of adding 2 or multipule arrays in single array.

const marvel = ["thor","spider-man","ironman"];
const dc = ["batman","superman","Arrow"]
const indian = ["shaktiman", "Jadugar"]

// marvel.push(dc); // [ 'thor', 'spider-man', 'ironman', [ 'batman', 'superman', 'Arrow' ] ]
let allheros_concat = marvel.concat(dc); // [ 'thor', 'spider-man', 'ironman', 'batman', 'superman', 'Arrow' ]

//* Spread oparator --> it is similar to concat but in this it can spread element of more than 2 arrays.
const all_new_heros = [...marvel,...dc,...indian]; // [ 'thor', 'spider-man', 'ironman', 'batman', 'superman', 'Arrow', 'shaktiman', 'Jadugar' ]
//? console.log(all_new_heros);

//* flat --> it is used to spread all element inside the arrays

const new_array = [1,2,3,4,[5,6,7,[8,9,[10,11]]]];
const new_array2 = new_array.flat(Infinity); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]
//? console.log(new_array2);

//* methods --> isArray & from ['convert in array']

//? console.log(Array.isArray('Kanha')); //false
//? console.log(Array.from('kanha')); // [ 'k', 'a', 'n', 'h', 'a' ]
//? console.log(Array.from({name : "Ram"})); //output -> [] Different from other

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
//? console.log(Array.of(score1,score2,score3,score4)); //[ 100, 200, 300, 400 ]