/*
--> Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area. 

* Step 1: Get base value of the triangle
* Step 2: added an id in the base input field
* Step 3: use GetElementById to access the input field
* Step 5: Convert the value to a number by using parseFloat

*/


function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)



}