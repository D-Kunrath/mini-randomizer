const btnStart = document.querySelector('[data-btn-start]');
const btnReset = document.querySelector('[data-btn-reset]');
const students = [...document.querySelectorAll('[data-item]')];
const randomizedList = document.querySelector('[data-randomized]');

const selectAndRemoveRandom = (arr) => {
  return arr.splice(Math.floor(Math.random() * arr.length), 1);
}

const randomizeList = () => {
  const studentList = students.map(student => student.innerText);
  randomizedList.innerHTML = '';
  while(studentList.length){
      const selected = selectAndRemoveRandom(studentList)[0];
      const li = document.createElement('li');
      li.innerText = selected;
      randomizedList.appendChild(li);
  }
}

const resetList = () => {
  randomizedList.innerHTML = '';
}

btnStart.addEventListener('click', randomizeList);
btnReset.addEventListener('click', resetList);