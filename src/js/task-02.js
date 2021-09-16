const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const titleElList = document.querySelector('#ingredients');

const titleElitem = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

titleElList.innerHTML = titleElitem;

