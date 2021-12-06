// document.body.style.background = 'red';

// setTimeout(function () {
//   document.body.style.background = 'green';
// }, 3000);

// console.log(location.href);
// setTimeout(function () {
//   location.href = 'https://google.com';
// }, 3000);

// const elem = document.body;
// elem.childNodes[1].childNodes[1].childNodes[1].style.fontSize = '60px';
// console.log(elem.childNodes[1].nextSibling.nextSibling);

// const ul = elem.children[0].children[0];
// console.log(ul);

// const ul = document.getElementById('menu');
// const ele = document.querySelectorAll('#menu');
// const ele = document.querySelectorAll('#menu .menu-item');
// const ele1 = document.querySelector('.menu-item');
// console.log(ele);

// const ul = document.querySelector('#menu');
// const li = ul.querySelectorAll('.menu-item');
// const li = ul.getElementById('.menu-item'); // Wrong
// console.log(li[0].nextElementSibling.parentElement);

// const newDiv = document.createElement('div'); // <div></div>
// newDiv.className = 'main-content'; // <div class="main-content"></div>
// const text = document.createTextNode('Hello Js Create');
// newDiv.innerText = text.textContent;
// newDiv.innerHTML = '<h2>This is main content</h2>';
// newDiv.id = 'main-content';
// console.log(newDiv);

// const h1 = document.querySelector('h1');
// h1.append(newDiv);

// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello Dom';
// const mainHeader = document.getElementById('main-header');
// mainHeader.insertAdjacentHTML('beforebegin', '<h1>Insert Adjacent Before Begin</h1>');
// mainHeader.insertAdjacentHTML('afterend', '<h1>Insert Adjacent After Begin</h1>');

// const menu = document.getElementById('menu');
// setTimeout(() => menu.remove(), 5000);
// setTimeout(() => {
//   mainHeader.innerHTML = '';
// }, 5000);

// mainHeader.style.backgroundColor = 'cyan';
// mainHeader.style.padding = '2rem';
// setTimeout(() => {
//   mainHeader.style.display = 'none';
// }, 5000);

// mainHeader.className = 'main-header mt-0 fs-1';
// console.log(mainHeader.classList);
// mainHeader.classList.add('abcd');
// setTimeout(() => {
//   mainHeader.classList.remove('abcd');
// }, 3000);

// setTimeout(() => {
//   mainHeader.classList.add('hidden');
// }, 3000);

// setTimeout(() => {
//   mainHeader.classList.toggle('hidden');
// }, 6000);

// console.log(mainHeader.classList.contains('mt-0'));

// const btn = document.querySelector('button');
// btn.onclick = function () {
//   console.log(this.name);
//   // alert('DOM property clicked');
// };

// btn.onclick = function () {
//   alert('clicked');
// };

// setTimeout(() => {
//   btn.onclick = null;
// }, 10000);

// const li = document.querySelector('li');
// li.onclick = function () {
//   console.log(this);
// };

// function clickBtn() {
//   alert('clicked');
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function (event) {
//   console.log(this.name);
//   console.log(event);
// });
// btn.addEventListener('click', clickBtn);

// btn.removeEventListener('click', clickBtn);

const div = document.getElementById('main-header');
div.addEventListener('click', function (event) {
  console.log(event);
  console.dir(event.currentTarget);
});

// const input = document.querySelector('input');
// input.addEventListener('change', function (event) {
//   console.log(event.target.value);
//   console.log(event.target.value ** 2);
// });

// const atag = document.querySelector('a');
// atag.addEventListener('click', function (event) {
//   event.preventDefault();
//   const cf = confirm('Are you sure?');
//   if (cf) {
//     location.href = 'https://google.com';
//   }
// });

// const form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//   console.log('Clickedddddddddd');
//   event.preventDefault();
// });
