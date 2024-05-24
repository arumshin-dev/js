console.log("width.js");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    heightOutput.textContent = "height: " + window.innerHeight;
  widthOutput.textContent = "width: " + window.innerWidth;
  //console.log(window.innerWidth);
  if (window.innerWidth > 600) {
    document.body.style.backgroundColor = "yellow";
  } else if (window.innerWidth > 300) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
}
reportWindowSize();
window.onresize = reportWindowSize;
