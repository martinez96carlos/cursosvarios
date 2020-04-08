// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5,2); //  []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2); // no es bueno para el permormance
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const moreNumbers = Array.from(listItems);
// console.log(moreNumbers);

// const hobbies = ['coocking','sports'];
// const personalData = [30, 'Carlos', {moreDetail: []}];

// const analyticsData = [[1,2,3], [2,3,5]];

// for (const data of analyticsData) {
//   for (const dataPoints of data){
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// const shiftedValue = hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; //no es muy usado
// console.log(hobbies, hobbies[4]);

// hobbies.splice(0,0, 'Good Food'); //Primero el index donde empezara, cuantos items borrara, los datos a ingresar en un array normal []
// console.log(hobbies);

// const removedElements = hobbies.splice(2,1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([1,2,3,4,5,6,]);

// testResults.push(5.91);

// console.log(testResults );
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{name:'max'},{name:'Manuel'}];
// console.log(personData.indexOf());

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'max';
// });
// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for(const price of prices){
// //   taxAdjustedPrices.push(price * (1+tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });
// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b)=>{
//   if( a > b){
//     return 1;
//   }else if(a===b){
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter(price => price > 6);
// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //   sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// });
// console.log(sum);

// const data ='new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// transformedData[2] = +transformedData[2];
// console.log(transformedData);

// const nameFragments = ['carlos','martinez'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments,copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name: 'Carlos', age: 24},{name: 'Lulu', age: 21}];
// const copiedPersons = [...persons.map(person => ({name: person.name, age: person.age}) )];
// persons.push({name:'Anna', age: 22});
// persons[0].name = 'Andrea'
// console.log(persons,copiedPersons);

// const nameData = ['Carlos','Martinez','mr'];
// const firstName = nameData[0];
// const lastName = nameData[1];

// const [ firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName,lastName);
// console.log(otherInformation);