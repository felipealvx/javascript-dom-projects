const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const numbers = document.getElementById('numbers')

count = 0;

function incrementFun(){
  count++;
  numbers.innerHTML = count;
}
function decrementFun(){
  count--;
  numbers.innerHTML = count;
}
function resetFun(){
  count = 0;
  numbers.innerHTML = count;
}

increment.addEventListener('click', incrementFun);
decrement.addEventListener('click', decrementFun);
reset.addEventListener('click', resetFun);