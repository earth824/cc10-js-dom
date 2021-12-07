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

// const div = document.getElementById('main-header');
// div.addEventListener('click', function (event) {
//   console.log(event);
//   console.dir(event.currentTarget);
// });

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

// Lab 2.1
// const body = document.body;
// const div = body.firstElementChild;
// const ul = div.nextElementSibling;
// const firstLi = ul.firstElementChild; // ul.children[0]
// const secondLi = ul.lastElementChild; // ul.children[1]

// Lab 2.2
// let h2 = document.querySelector('h2'); // document.querySelector('.title-1')
// h2 = document.querySelectorAll('h2')[0];
// h2 = document.getElementsByClassName('title-1')[0];
// h2 = document.getElementsByTagName('h2')[0];
// console.log(h2);

// Lab 2.3
// let thirdLi = document.querySelector('ul li:last-child');
// thirdLi = document.querySelectorAll('ul li:last-child')[0];
// thirdLi = document.getElementById('3');
// thirdLi = document.getElementsByTagName('li')[2];
// console.log(thirdLi);

// Lab 2.4
// let secondLi = document.querySelector('.active');
// secondLi = document.querySelectorAll('li')[1];
// secondLi = document.getElementsByClassName('active')[0];
// secondLi = document.getElementById('2');
// secondLi = document.getElementsByTagName('li')[1];
// console.log(secondLi);

// Lab 3.1
// let li = document.querySelectorAll('li');
// console.log(li);
// for (let el of li) {
//   console.log(el.innerText);
// }

// Lab 3.2
// const ul = document.createElement('ul');

// let input = prompt('Enter text');
// while (input !== null && input !== '') {
//   const li = document.createElement('li');
//   li.innerHTML = input;
//   ul.append(li);
//   input = prompt('Enter text');
// }

// document.body.append(ul);

// Lab 3.3
// const ol = document.getElementById('elem');
// ol.innerHTML = '';

// Lab 3.4
// const button = document.querySelector('button');
// setTimeout(function () {
// button.style.backgroundColor = 'red';
// button.classList.add('red');
// }, 3000);

// setTimeout(function () {
// button.style.backgroundColor = '';
// button.classList.remove('red');
// }, 6000);

// setInterval(function () {
//   button.classList.toggle('red');
// }, 1000);

// Lab 4.1
// const button = document.querySelector('button');
// button.addEventListener('click', () => alert('1')); // (1)
// button.removeEventListener('click', () => alert('1')); // (2)
// button.onclick = () => alert(2); // (3)

// Lab 4.2
// const form = document.querySelector('form');
// form.onsubmit = function () {
//   alert('Form is submitted');
// };

// form.onsubmit = null;

// function submit() {
//   alert('Form is submitted');
// }

// form.addEventListener('submit', submit);
// form.removeEventListener('submit', submit);

// Lab 4.3
// const form = document.querySelector('form');
// function submit(event) {
//   event.preventDefault();
// }
// form.addEventListener('submit', submit);

// Lab 4.4
// const aTag = document.querySelector('a');
// aTag.addEventListener('click', function (event) {
//   event.preventDefault();
//   const redirect = confirm('Leave for https://google.com?');
//   if (redirect) {
//     location.href = 'https://google.com';
//   }
// });

// Lab 4.5
// const nickname = document.querySelector('input');
// const job = document.querySelectorAll('input')[1];

// nickname.addEventListener('click', function (event) {
//   console.log(event.target.name);
// });
// job.addEventListener('click', function (event) {
//   console.log(event.target.name);
// });
// nickname.addEventListener('input', function (event) {
//   console.log(event.target.value);
// });
// job.addEventListener('input', function (event) {
//   console.log(event.target.value);
// });

// Lab 4.6
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   this.style.display = 'none';
// });

// Lab 4.7
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const text = document.querySelector('h1');
//   text.style.display = 'none';
// });

// Lab 4.8
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const text = document.querySelector('h1');
// if (text.style.display === 'none') {
//   text.style.display = '';
//   btn.textContent = 'Hide';
// } else {
//   text.style.display = 'none';
//   btn.textContent = 'Show';
// }

//   if (text.classList.contains('hidden')) {
//     btn.textContent = 'Hide';
//   } else {
//     btn.textContent = 'Show';
//   }
//   text.classList.toggle('hidden');
// });

// Lab 4.9
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const input = document.querySelector('input');
//   const value = input.value;
//   const pTag = document.querySelector('p');

//   if (value === '') {
//     pTag.innerHTML = 'Phone number required';
//     pTag.classList.remove('hidden');
//     input.classList.add('error');
//   } else if (isNaN(value.trim()) || value.startsWith('0x') || value.startsWith('0b') || value.startsWith('0o')) {
//     pTag.innerHTML = 'Phone number is invalid';
//     pTag.classList.remove('hidden');
//     input.classList.add('error');
//   } else if (value.length !== 10) {
//     pTag.innerHTML = 'Invalid length';
//     pTag.classList.remove('hidden');
//     input.classList.add('error');
//   } else {
//     pTag.classList.add('hidden');
//     input.classList.remove('error');
//     alert('Valid phone number');
//   }
// });

// Lab 4.10
// const mapProvinceDistrict = {
//   BANGKOK: ['BANGBON', 'BANGKHAE', 'BANGKAPI'],
//   PHUKET: ['KATHU', 'THALANG'],
//   RANONG: ['KRA BURI', 'KA POE']
// };

// const province = document.querySelector('#province');
// province.addEventListener('change', function () {
//   const district = document.querySelector('#district');
//   const provinceSelected = province.value;
//   const showDistricts = mapProvinceDistrict[provinceSelected] || [];
//   // <option value="">SELECT</option>;
//   // ['BANGBON', 'BANGKHAE', 'BANGKAPI']
//   // '<option value="BANGBON">BANGBON</option><option value="BANGKHAE">BANGKHAE</option><option value="BANGKHAE">BANGKAPI</option>'
//   // let str = '<option value="">SELECT</option>';
//   // for (let el of showDistricts) {
//   //   str += `<option value="${el}">${el}</option>`;
//   // }
//   let str =
//     '<option value="">SELECT</option>' + showDistricts.map(el => `<option value="${el}">${el}</option>`).join('');
//   district.innerHTML = str;
// });

// Lab 4.11
// const btnAdd = document.querySelector('.btn-add');
// const btnSubtract = document.querySelector('.btn-subtract');
// const btnReset = document.querySelector('.btn-reset');
// const count = document.querySelector('span');

// btnAdd.addEventListener('click', function () {
//   count.innerHTML = +count.innerHTML + 1;
// });

// btnSubtract.addEventListener('click', function () {
//   if (count.innerHTML !== '0') {
//     count.innerHTML = +count.innerHTML - 1;
//   }
// });

// btnReset.addEventListener('click', function () {
//   count.innerHTML = 0;
// });

// Lab 4.12
const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', function () {
  const input = prompt('Enter new task');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');
  span.innerHTML = input;
  btnEdit.innerHTML = 'Edit';
  btnDelete.innerHTML = 'Delete';

  span.addEventListener('click', function () {
    this.classList.toggle('line-through');
  });

  btnEdit.addEventListener('click', function () {
    const editText = prompt('Enter edit task');
    const currentSpan = this.previousElementSibling;
    currentSpan.innerHTML = editText;
  });

  btnDelete.addEventListener('click', function () {
    this.closest('li').remove();
  });

  li.append(span);
  li.append(btnEdit);
  li.append(btnDelete);

  const ul = document.querySelector('ul');
  ul.append(li);
});
