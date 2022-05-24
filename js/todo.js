const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.getElementsByTagName('input')[0];
// const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
console.dir(toDoList);

const ToDOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(ToDOS_KEY, JSON.stringify(toDos));
  //배열의 값들을 그냥 저장하는게 아닌 배열모양을로 저장
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((e) => e.id !== Number(li.id));
  //여기서 li.id는 String
  //why? dom의 id는 문자열
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement('li');
  li.id = newToDoObj.id;
  const span = document.createElement('sapn');
  span.innerText = newToDoObj.content;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //위에서 .value를 안붙이는 이유는 값이 변동돼야하기때문. const변동안됨.
  newToDoObj = {
    id: Date.now(),
    content: newTodo,
  };
  toDos.push(newToDoObj); // 배열에 저장
  saveToDos(); // 배열에 있는 값을 localstorage에 한 뭉탱이로 저장
  paintToDo(newToDoObj);

  toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(ToDOS_KEY);
//savedTdDos !== null
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  //배열모양으로된 값을 진짜 배열의 역할을 할 수 있는 json으로 변환

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
