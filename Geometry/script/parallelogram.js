/*
function calculateParallelogramArea() {

    // Get parallelogram base value
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    // Get parallelogram height Value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height)

    // Calculate parallelogram area
    const area = base * height;
    console.log("parallelogram Area", area);

    // Display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}
*/

// function calculateParallelogramArea() {
// const baseInput = document.getElementById('parallelogram-base');
// const baseText = baseInput.value;
// const base = parseFloat(baseText);
// console.log(base);

// const base = getParallelogramBase();
// console.log(base)

// }

// function getParallelogramBase() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;

// }



function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('HEight value', height);

    const area = base * height;
    // console.log('area', area);

    setInnerTextById('parallelogram-area', area)

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}