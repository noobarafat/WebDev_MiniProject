function calculateRhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = 3.14 * d1 * d2;
    setInnerTextById('rhombus-area', area);

}