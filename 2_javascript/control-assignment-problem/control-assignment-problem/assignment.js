// produces random number between 0 (including) and 1 (excluding)


for (let i = 0; i < 10; i++){
  const randomNumber = Math.random();
  if(randomNumber>0.7){
    console.log("task1");
  }
}

console.log("Task2");

const arrayTask2 = [87,98,64,31,64,97];
for (let i = 0; i<arrayTask2.length; i++){
  console.log(arrayTask2[i]);
}


console.log("Task2.2" );
for (const element of arrayTask2){
  console.log(element);
}

console.log("Task3" );
for (let i = arrayTask2.length; i>0; i--){
  console.log(arrayTask2[i-1]);
}
console.log("Task4");


for (let i = 0; i < 10; i++){

  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();
  if(randomNumber2>0.7 && randomNumber3>0.7){
    console.log(randomNumber3 + " " + randomNumber2);
    console.log("both greater than 0.7");
  } else if (randomNumber2 <0.2 || randomNumber3 <0.2){
    console.log(randomNumber3 + " " + randomNumber2);
    console.log("at least 1 not greater than 0.2")
  }
}