const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const clrVal = document.getElementById('info-clr');
const btn = document.getElementById('info-btn');

btn.addEventListener('click', function () {
  let hexClr = '#';
  for (let i = 0; i < 6; i++) {
    hexClr += hex[getRandomNumber()];
    // console.log(hexClr)
  }
  clrVal.textContent = hexClr;
  document.body.style.background = hexClr;
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

