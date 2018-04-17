function showNext() {
  let quotes_array = JSON.parse(document.getElementById("quotes_json").innerText);
  let randomNumber = Math.floor(Math.random() * quotes_array.length);
  document.getElementById("author").src = ('css/' + quotes_array[randomNumber]["author-image"] + '.png').toString();
  document.getElementById("speechText").innerHTML = (quotes_array[randomNumber]['phrase'] + ' ' +
    quotes_array[randomNumber]['signature']).toString();
}


function turnLightOn() {
  let switchButton = document.getElementById("switchButton");
  switchButton.src = "css/switch.png";
  let stageBlack = document.getElementById("stage-black");
  stageBlack.style.opacity = "0";
}

function turnLightOff() {
  let switchButton = document.getElementById("switchButton");
  switchButton.src = "css/switch_off.png";
  let stageBlack = document.getElementById("stage-black");
  stageBlack.style.opacity = "1";
}

async function pressSwitch() {
  let lightIsOn = document.getElementById('switchButton').src.search('switch.png') > -1;
  if (lightIsOn) {
    turnLightOff();
  }
  else {
    showNext();
    await sleep(150);
    turnLightOn();
  }
}

function sleep(ms) {  //  Stolen from stackoverflow
  return new Promise(resolve => setTimeout(resolve, ms));
}
