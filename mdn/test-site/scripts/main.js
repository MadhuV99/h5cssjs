
// On-click, swap image
let myImg = document.querySelector('img');
myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');
  if(mySrc === 'images/firefox-icon.jpg') {
    myImg.setAttribute('src', 'images/firefox-icon-2.svg.png');
  } else {
    myImg.setAttribute('src', 'images/firefox-icon.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  //alert('am here 1');
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  } else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/