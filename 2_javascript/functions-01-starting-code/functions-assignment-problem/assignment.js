// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

//Task 1
const saludo = (name) => {
  console.log('Hi ' + name);
}
saludo('Carlos');

//Task 2
const saludo1 = (frase,name) => {
  console.log(frase + name);
}
saludo1('Hi ','Carlos');

const saludo2 = () => {
  console.log('Hi Carlos');
}
saludo2();

const saludo3 = (nombre) => {
  const texto = 'Hi '+ nombre;
  return texto;
}
console.log(saludo3('Carlos'));

//Task 3
const saludo4 = (nombre = 'Carlos') => {
  console.log('Hi '+nombre);
}
saludo4();

//Taskt 4
const checkInput = (chequeo, ...letters) => {
  let frase = '';
  for (const vars of letters){
    frase += chequeo(vars);
  }
  return frase;
 }
const checker = (vars) => {
  if(typeof(vars) === 'string' && vars){
    return vars;  
  } else {
    return '* ';
  }
}
console.log(checkInput(checker,'Hola ', 'como',4 ,'vas?'));
