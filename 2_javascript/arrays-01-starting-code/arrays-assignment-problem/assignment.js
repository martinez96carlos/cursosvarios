// Assignment 1
const numbers = [1,2,3,4,5,6];
const filteredNumbers = numbers.filter(number => number > 5);
console.log(filteredNumbers);

const numbersMaped = numbers.map((number) => {
  const numbersObjects = {num: number};
  return numbersObjects;
});
console.log(numbersMaped);

const multiplicacion = numbers.reduce((prevValue, curValue) => {
  return prevValue * curValue;
});
console.log(multiplicacion);


//Assignment 2
function findMax (...numbers) {
  let curMax = numbers[0];
  for(const num of numbers){
    if (num>curMax);
    curMax = num;
  }
   return curMax
  
};

console.log(findMax(...numbers));


//assignment 3

function findMinMax(...numbers){
  let curMax = numbers[0];
  let curMin = numbers[0];
  for(const num of numbers){
    if(num > curMax){
      curMax = num;
    }
    if(num < curMin) {
      curMin = num;
    }
  }
  return [curMax,curMin];
}
const [min,max] = findMinMax(...numbers);

//Assignment 4
const listado = new Set();
listado.add(10);
listado.add(-5);
listado.add(-5);

console.log(listado);