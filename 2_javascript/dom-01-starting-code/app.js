// window.alert("Hola")
// const h1 = document.getElementById('main-title');
// h1.textContent = ' Some New Tittle! ';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent+ ' (Changed!)';

// const listItemElement = document.querySelectorAll('li');
// const listItemElement = document.getElementByTag('li');

// for(const listItemEl of listItemElement){
//   console.dir(listItemEl);
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

// console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', ()=>{
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  section.classList.toggle('invisible')
});
