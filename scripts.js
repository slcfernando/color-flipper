"use strict";

const HEX_CHARACTERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hexButton = document.getElementById("hex");
const rgbButton = document.getElementById("rgb");
let hexMode = true;

changeMode();
displayColors();

function getRandomNumber(min, max) {
  return Math.floor( Math.random() * (max - min) ) + min;
}

function getRandomHexColor() {
  let hexCharacterList = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = getRandomNumber(0, HEX_CHARACTERS.length);
	hexCharacterList.push(HEX_CHARACTERS[randomIndex]);
  }
  return `#${ hexCharacterList.join("") }`;
}

function getRandomRgbColor() {
  let rgbNumberList = [];
  for (let i = 0; i < 3; i++) {
    let randomRgbValue = getRandomNumber(0, 255);
	rgbNumberList.push(randomRgbValue);
  }
  return `rgb(${ rgbNumberList[0] },
  ${ rgbNumberList[1] },
  ${ rgbNumberList[2] })`;
}

function displayColors() {
  btn.addEventListener("click", function() {
	let randomColor = hexMode ? getRandomHexColor() : getRandomRgbColor();
	
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
  })
}

function changeMode() {
  hexButton.addEventListener("click", function() {
	hexMode = true;
	hexButton.style.fontWeight = 700;
	rgbButton.style.fontWeight = 400;
	document.body.style.backgroundColor = "#F4F4F6";
	color.textContent = "#F4F4F6";
  })
  
  rgbButton.addEventListener("click", function() {
	hexMode = false;
	rgbButton.style.fontWeight = 700;
	hexButton.style.fontWeight = 400;
	document.body.style.backgroundColor = "rgb(244, 244, 246)";
	color.textContent = "rgb(244, 244, 246)";
  })
}