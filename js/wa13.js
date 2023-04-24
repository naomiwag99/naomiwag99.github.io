let x = null;
let moreCounter = 0;
let lessCounter = 0;
let maxPressNum = Math.floor(Math.random() * 7) + 1; // set random max number of button presses

function startVolumeButton() {
  if (x === null) {
    x = Math.floor(Math.random() * 100) + 1;
    let outputElement = document.getElementById("output");
    let outputText = document.createTextNode("Your starting volume level is: " + x);
    outputElement.appendChild(outputText);
    document.getElementById("startB").disabled = true;
  }
}

function morePress() {
  if (moreCounter < maxPressNum) {
    const newStuff = Math.floor(Math.random() * (100 - x + 1)) + x;
    document.getElementById("output").innerHTML = "Your next volume level is:  " + newStuff;
    x = newStuff;
    moreCounter++;
  } else {
    let outputElement = document.getElementById("output");
    let outputText = document.createTextNode(". Please subscribe first to press the fun buttons more.");
    outputElement.appendChild(outputText);
    document.getElementById("moreB").disabled = true;
    document.getElementById("lessB").disabled = true;
  }
}
//
function lessPress() {
  if (lessCounter < maxPressNum) {
    let newStuff = Math.floor(Math.random() * (x + 1));
    document.getElementById("output").innerHTML = "Your new volume level is " + newStuff;
    x = newStuff;
    lessCounter++;
  } else {
    let outputElement = document.getElementById("output");
    let outputText = document.createTextNode(". Please subscribe first to press the fun buttons more.");
    //disables the buttons if its more than the count
    outputElement.appendChild(outputText);    
    document.getElementById("moreB").disabled = true;
    document.getElementById("lessB").disabled = true;
  }
}

document.getElementById("startB").addEventListener("click", startVolumeButton);
document.getElementById("moreB").addEventListener("click", morePress);
document.getElementById("lessB").addEventListener("click", lessPress);
