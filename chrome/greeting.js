const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);//local storage에서 username을 가져온다.

if (savedUsername === null){//savedUsername이 null이면
  loginForm.classList.remove(HIDDEN_CLASSNAME);//loginForm에 hidden을 제거
  loginForm.addEventListener("submit", onLoginSubmit);//loginForm에 submit 이벤트를 추가
} else{
  loginForm.classList.add(HIDDEN_CLASSNAME);//loginForm에 hidden을 추가
  paintGreetings(savedUsername);//savedUsername을 받아서 paintGreetings 함수 실행
}

//loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);//loginForm에 submit 이벤트를 추가
function onLoginSubmit(event){
  event.preventDefault();//이벤트가 발생했을때 기본동작을 막아줌
  onLoginBtnClick();//onLoginBtnClick 함수 실행
}
function onLoginBtnClick(){
  const username = loginInput.value;
  if(username === ""){//username이 비어있으면
    //alert("Please write your name");
  }else if(username.length > 15){//username의 길이가 15보다 크면
    //alert("Your name is too long");
  }else{
    alert("Hello " + username);
    loginForm.classList.add(HIDDEN_CLASSNAME);//loginForm에 hidden을 추가
    paintGreetings(username);//username 받아서 paintGreetings 함수 실행
    //localStorage는 사용자가 브라우저를 종료하고 다시 시작할때에도 저장된 값을 가져올 수 있음
    localStorage.setItem("username",username);//local storage에 username을 저장
    
  }
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;//greeting에 Hello username을 출력
  greeting.classList.remove(HIDDEN_CLASSNAME);//greeting에 hidden을 제거
}

/*link.addEventListener("click",handleLinkClick);//link에 click 이벤트를 추가
function handleLinkClick(event){
  event.preventDefault();//이벤트가 발생했을때 기본동작을 막아줌
}*/