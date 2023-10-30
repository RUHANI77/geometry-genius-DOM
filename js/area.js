function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  // get triangle height value
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

  const area = 0.5 * base * height;
  console.log(area);

  // show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;

  addToCalculationEntry("Triangle", area);
}

function calculateRectangleArea() {
  // get Rectangle width value
  const widthFeild = document.getElementById("rectangle-width");
  const widthFeildText = widthFeild.value;
  const width = parseFloat(widthFeildText);
  console.log(width);

  // get Rectangle length
  const lengthFeild = document.getElementById("rectangle-length");
  const lengthFeildText = lengthFeild.value;
  const length = parseFloat(lengthFeildText);
  console.log(length);

  // validate input: width and length
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }

  const area = width * length;
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;

  addToCalculationEntry("Rectangle", area);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  console.log(height);
  // validate
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert number");
    return;
  }
  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  // add to calculation entry
  addToCalculationEntry("Parallelogram", area);
}

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");

  const area = 0.5 * d1 * d2;
  setElementInnerText("rhombus-area", area);

  addToCalculationEntry("Rhombus", area);
}
function calculatePentagonArea() {
  const p = getInputValue("pentagon-p");
  const b = getInputValue("pentagon-b");

  const area = 0.5 * p * b;
  setElementInnerText("pentagon-area", area);

  addToCalculationEntry("Pentagon", area);
}
function calculateEllipseArea() {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");

  const area = (3.1416 * a * b).toFixed(2);
  setElementInnerText("ellipse-area", area);

  addToCalculationEntry("Ellipse", area);
}
// reusable function --> reduce duplicate code

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML, it could be dynamic Template String
 * 5. append the created element as a child of the parent
 */

function addToCalculationEntry(areaType, area) {
  console.log();
  const calculationEntry = document.getElementById("calculation-entry");

  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
  calculationEntry.appendChild(p);
}
