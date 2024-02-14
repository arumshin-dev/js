const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
let toDos= [];
const TODOS_KEY = 'todos';


function lisToDo(event){
  event.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(toDo);
  toDoList.innerHTML = toDos.map((toDo) => `<li>${toDo}</li>`).join('');
}

function savaToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));//local storage에 todos를 저장
}

function deletetodo(event){
  //console.dir(event.target);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click',deletetodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  //console.log(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const toDoText = toDoInput.value;
  toDoInput.value = '';
  //console.log(toDoText, toDoInput.Value);
  toDos.push(toDoText);
  paintToDo(toDoText);
  savaToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}
//JSON.parse(localStorage.getItem(TODOS_KEY));

