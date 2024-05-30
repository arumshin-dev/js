// blueprint에 colors배열이 선언되어 있습니다.
// 사용자가 버튼을 클릭하면 colors배열에서 두 가지 색상이 랜덤으로 선택되어야 합니다.
// body태그의 style을 랜덤으로 선택된 두 가지 색상을 사용해 linear-gradient로 변경하세요.

// 색상 배열
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

// 버튼 요소 선택
const button = document.querySelector("button");

// 버튼 클릭 이벤트 리스너 추가
button.addEventListener("click", () => {
  // 첫 번째 색상 무작위로 선택
  const color1Index = Math.floor(Math.random() * colors.length);
  const color1 = colors[color1Index];

  // 두 번째 색상 무작위로 선택 (첫 번째 색상을 제외한 나머지 중에서)
  let color2Index;
  do {
    color2Index = Math.floor(Math.random() * colors.length);
  } while (color2Index === color1Index);
  const color2 = colors[color2Index];

  // 선택한 두 색상으로 그라데이션 배경색 설정
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
