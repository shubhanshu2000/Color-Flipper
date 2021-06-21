const colors = ['yellow', 'green', 'blue', 'red', 'rgba(133,122,200)', '#f15025'];
const clrVal = document.getElementById('info-clr');
const btn = document.getElementById('info-btn');
const addClr = document.getElementById('add-clr');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber)
  document.body.style.background = colors[randomNumber];
  clrVal.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};

//add color js
addClr.addEventListener('click', function () {
  let input = prompt('Enter new color');
  // console.log(input);
  colors.push(input);
});