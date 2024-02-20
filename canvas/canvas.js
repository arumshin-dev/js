const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);//forEach 쓰기 위해서 collection을 array로 바꿔줌
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();//기존 선과 연결 끊어주기
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;//js 에서 쓰기 위해서 data-color를 사용
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

canvas.addEventListener("mousemove", onMove);//마우스 움직임
canvas.addEventListener("mousedown", startPainting);//마우스 클릭 눌렀을때
canvas.addEventListener("mouseup", cancelPainting);//마우스 클릭떼면
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);//라인 굵기 변경
color.addEventListener("change", onColorChange);//색 input에서 다른 색 바꿔서 선택하면
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));//컬러 옵션 팔레트 클릭하면
modeBtn.addEventListener("click", onModeClick);