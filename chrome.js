const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSbmit);
function onLoginSbmit(event){
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
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username",username);
    
  }
  console.log(username);
}

link.addEventListener("click",handleLinkClick);
function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
}