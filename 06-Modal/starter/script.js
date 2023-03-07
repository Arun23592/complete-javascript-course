'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCLoseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked!');
//     modal.classList.remove('hidden'); //it will remove content from class
//     overlay.classList.remove('hidden');

//     // modal.style.display = 'block';
//   });

const openModal = function () {
  console.log('Button Clicked!');
  modal.classList.remove('hidden'); //it will remove content from class
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal); // modal.style.display = 'block';

  btnCLoseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

//Key press events
document.addEventListener('keydown', function (e) {
  console.log('Key was prerssed');
  console.log(e.key);

  if (e.key == 'ArrowUp' && !modal.classList.contains('hiden')) {
    closeModal();
  }
});
