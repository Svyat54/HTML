/*var myHeading = document.querySelector('h1'); //присваеваем переменную(myHeading), в оглавление(('h1')) меняем значение
myHeading.textContent = 'Darth Revan'; // после присвоения указываем что будет в оглавлении */

/*document.querySelector('html').onclick = function() { // при нажатии на страницу вылетает сообщение
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img'); // при нажатии на картинку меняет её с 1 на 2, и в обратную сторону, но у меня что-то не так работает

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '1.jpg') {
      myImage.setAttribute ('src','2.jpg');
    } else {
      myImage.setAttribute ('src','1.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This is Darth Revan, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is Darth Revan, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}