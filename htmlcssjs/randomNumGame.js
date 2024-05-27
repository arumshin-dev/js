var randomNum = document.getElementById("randomNum");
var myNum = document.getElementById("myNum");

function randumNumGame() {
  var randomNumVal = randomNum.value;
  var myNumVal = myNum.value;
  console.log("randomNum", randomNumVal);
  if (randomNumVal == "") {
    alert("set randomNum");
    randomNum.focus();
    return;
  }
  if (myNumVal == "") {
    alert("set myNum");
    myNum.focus();
    return;
  }
  //   var answer = Math.floor(Math.random() * (randomNumVal + 1));
  var answer = Math.floor(Math.random() * (randomNumVal * 1 + 1));
  console.log("answer", answer);
  if (myNumVal == answer) {
    resultTxt = `You won!`;
  } else {
    resultTxt = `You lost!`;
  }
  document.getElementById(
    "explain"
  ).innerText = `You chose: ${myNumVal}, the machine chose: ${answer}.`;
  document.getElementById("result").innerText = resultTxt;
  document.getElementById("explain").style.display = "block";
  document.getElementById("result").style.display = "block";
}
