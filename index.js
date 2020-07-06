// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1></h1>`;

//const canvas = document.getElementById('canvas');
//canvas.onclick = canvasClicked();

const buttonContainer = document.getElementById('buttonContainer');

const patternWidth = 20;
const patternHeight = 8;

for(var y = 0; y < patternHeight; y += 1)
{
  for(var x = 0; x < patternWidth; x += 1)
  {
    var newInput = document.createElement("INPUT");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("class", "patternButton");
    buttonContainer.appendChild(newInput);
  }
  buttonContainer.appendChild(document.createElement("BR"));
}