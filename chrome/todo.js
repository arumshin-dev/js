const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
let toDos = [];
const TODOS_KEY = 'todos';

function savaToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//local storage에 todos를 저장
}

function deletetodo(event) {
  //console.dir(event.target);
  const li = event.target.parentElement;
  li.remove();
  
  //console.log(li.id);
  toDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  savaToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deletetodo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  //console.log(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDoText = toDoInput.value;
  toDoInput.value = '';
  //console.log(toDoText, toDoInput.Value);
  const newTodoObj = {
    text: toDoText,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savaToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}
//JSON.parse(localStorage.getItem(TODOS_KEY));

/*
*맨위에 한개만
  document.querySelector('#todo-list input[type="checkbox"]').addEventListener('change', toggleLineThrough);

function toggleLineThrough(checkbox) {
    var listItem = checkbox.target.parentNode;
    listItem.classList.toggle('checked');
}
*/
/* 동적 생성 된 애 안됨
  let checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        var listItem = this.parentNode;
        listItem.classList.toggle('checked');
    });
});
*/
// 부모 요소에 이벤트 리스너 추가
  toDoList.addEventListener('change', function(event) {
    // 이벤트가 발생한 요소가 체크박스인 경우에만 실행
    if (event.target.matches('input[type="checkbox"]')) {
        var listItem = event.target.parentNode;
        listItem.classList.toggle('checked');
    }
});