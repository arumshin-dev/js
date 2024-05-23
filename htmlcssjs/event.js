// 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
// 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
// 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
// 마우스를 우 클릭하면 title이 바뀌어야 합니다.
// title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
// .css 와 .html 파일은 수정하지 마세요.
// 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
// 모든 조건이 충족되지 못하면 ❌를 받습니다.
console.log("event.js");

let superEventHandler = {
  colors: ["red", "orange", "yellow", "green", "blue", "purple"],
  initEvent: function () {
    title.addEventListener("click", superEventHandler.test);
    title.addEventListener("mouseenter", superEventHandler.hover);
    title.addEventListener("mouseleave", superEventHandler.mouseOut);
    window.addEventListener("resize", superEventHandler.resize);
    window.addEventListener("contextmenu", superEventHandler.rightClick);
  },
  test: function (x = "") {
    console.log("test", x);
  },
  hover: function () {
    title.innerText = "The mouse is here";
    title.style.color = superEventHandler.colors[0];
  },
  mouseOut: function () {
    title.innerText = "The mouse is gone";
    title.style.color = superEventHandler.colors[1];
  },
  resize: function () {
    title.innerText = "You just resized";
    title.style.color = superEventHandler.colors[2];
  },
  rightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = superEventHandler.colors[3];
  },
};
const title = document.getElementById("title");
window.onload = function () {
  console.log("onload");
  title.addEventListener("click", () => superEventHandler.test(2));
  superEventHandler.initEvent();
};
title.addEventListener("click", () => superEventHandler.test(1));
