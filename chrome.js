const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);
if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

//loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);
function onLoginSubmit(event){
  event.preventDefault();//이벤트가 발생했을때 기본동작을 막아줌
  onLoginBtnClick();
}
function onLoginBtnClick(){
  const username = loginInput.value;
  if(username === ""){
    alert("Please write your name");
  }else if(username.length > 15){
    alert("Your name is too long");
  }else{
    alert("Hello " + username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
    //localStorage는 사용자가 브라우저를 종료하고 다시 시작할때에도 저장된 값을 가져올 수 있음
    localStorage.setItem("username",username);
    
  }
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click",handleLinkClick);
function handleLinkClick(event){
  event.preventDefault();
}