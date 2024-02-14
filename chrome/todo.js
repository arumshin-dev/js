const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
const toDos= [];

function savaToDos(){
  localStorage.setItem('todos',JSON.stringify(toDos));
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