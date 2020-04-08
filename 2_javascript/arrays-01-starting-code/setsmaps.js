// const ids = new Set(['hi','from','sets']);
// ids.add(2);

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = {name: 'Carlos'};
// const person2 = {name: 'Andres'};

// const personaData = new Map([[person1, [{date:'yesterday', price: 10}]]]);
// personaData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personaData);
// console.log(personaData.get(person1));

// for(const [key,value] of personaData.entries()){
//   console.log(key,value);
// }

// for (const key of personaData.keys()){
//   console.log(key);
// }

// for (const value of personaData.values()){
//   console.log(value);
// }

let person = {name: 'carlos'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'extra info');

person = null;

console.log(personData);