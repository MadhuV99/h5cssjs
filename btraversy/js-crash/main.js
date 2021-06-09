    // Single Element Selection
// console.log(document.getElementById('my-form'));
/*
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

    // Multiple Element Selection 
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Madhu';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
//btn.addEventListener('click', e => {
// btn.addEventListener('mouseover', e => {
btn.addEventListener('mouseout', e => {
  e.preventDefault();
  console.log('clicked!')
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.className);
  // console.log(e.target.type);
  // console.log(e.target.value);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello!</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
console.log(msg);
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value == '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter ALL fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    
    //Clear Input Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}


      // End of Code 