function calculateRectangleArea() {

    // Get rectangle base value
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseText)
    console.log(base);

    // Get rectangle height Value
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightText);
    console.log(height)

    // Calculate rectangle area
    const area = 0.5 * base * height;
    console.log("rectangle Area", area);

    // Display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}