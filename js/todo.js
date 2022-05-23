const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.getElementsByTagName('input')[0];
// const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
console.dir(toDoList);

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('sapn');
  span.innerText = newTodo;
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //위에서 value를 안붙이는 이유는 값 이 변동돼야하기때문. const변동안됨.
  console.log(newTodo);
  paintToDo(newTodo);
  toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);
