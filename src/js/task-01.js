const ulEl = document.querySelector("ul#categories");
const countOfChildren = ulEl.children.length;
console.log(`В списке ${countOfChildren} категории.`);

//===============================

const liEl = ulEl.children;


for (let i = 0; i < liEl.length; i++) {
  const childrenOfLi = liEl[i].children;
  
  const textContent = childrenOfLi[0].textContent;
  console.log("Категория: ", textContent);
  const countOfChild = childrenOfLi[1].children.length;
  console.log("Количество элементов: ", countOfChild);
}