const wordContent = document.getElementById('word');
const result = document.getElementById('result');
let randomElement;


function randomSelection(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  randomElement = array[randomIndex];
  wordContent.textContent = randomElement.español;
  result.className = '';
  result.textContent = '';

}

function checkAnswer() {
  const rightWord = randomElement.ingles;
  const input = document.getElementById('input-word');
  if(rightWord==input.value) {
    result.textContent = "correct  ("+ rightWord +")";
    result.className = "mt-5 p-5 ronded-x1 bg-green-400";
    console.log('ok')
  } else {
    const text = "right word was "+ rightWord;
    result.textContent = text;
    result.className = 'mt-5 p-5 rounded-x1 bg-red-400';

  };
  input.value = '';
  wordContent.textContent = '*****';

}