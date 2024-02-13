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

function calculateParallelogramArea() {
    // const baseInput = document.getElementById('parallelogram-base');
    // const baseText = baseInput.value;
    // const base = parseFloat(baseText);
    // console.log(base);

    const base = getParallelogramBase();
    console.log(base)

}

// function getParallelogramBase() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;

// }