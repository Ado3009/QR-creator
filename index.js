'use strict';

let image = document.querySelector('img');
let input = document.querySelector('input');
let button = document.querySelector('button');
let api1 = `https://api.qrserver.com/v1/`;
let api2 = `create-qr-code/?size=150x150&data=`;

button.addEventListener('click', e => {
  e.preventDefault();
  image.src = `${api1}${api2}${input.value}`;
  // let krug = document.querySelector('.line');
  // krug.style.display = 'block';
  // let krug2 = document.querySelector('.line2');
  // krug2.style.display = 'none';
});

// button.addEventListener('mouseover', e => {
//   let krug = document.querySelector('.line');
//   krug.style.display = 'none';
//   let krug2 = document.querySelector('.line2');
//   krug2.style.display = 'block';
// });
// let body = document.querySelector('body');
// window.addEventListener('click', e => {
//   let el = document.createElement('div');
//   el.className = 'noviElement';
//   body.appendChild = el;
// });

// window.addEventListener('click', e => {
//   let body = document.querySelector('body');
//   let main = document.querySelector('.main-wrapper');
// });

// if (button == 'mouseover') {
//   let krug = document.querySelector('.line');
//   krug.style.display = 'none';
//   let krug2 = document.querySelector('.line2');
//   krug2.style.display = 'block';
// } else {
//   let krug = document.querySelector('.line');
//   krug.style.display = 'block';
//   let krug2 = document.querySelector('.line2');
//   krug2.style.display = 'none';
// }

// let x;
// function interval() {
//   if (x) clearTimeout(x);
//   x = setTimeout(startInteractionTimer, 1);
//   let krug = document.querySelector('.line');
//   krug.style.display = 'block';
//   let krug2 = document.querySelector('.line2');
//   krug2.style.display = 'none';
// }

// function line() {}
