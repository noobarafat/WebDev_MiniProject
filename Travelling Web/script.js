const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count += 1;

        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const selectedContainer = document.getElementById("selected-place-container");

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = placeName;
        const p2 = document.createElement("p2");
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li)

        /*
        const totalCost = document.getElementById("total-cost").innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(price);
        */

        // document.getElementById("total-cost").innerText = sum;

        /*
        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt(price);
        */

        GrandTotalCost("grand-total", parseInt(price))
        totalCost("total-cost", parseInt(price));

        setInnerText("cart-count", count);
    });
}

function totalCost(id, value) {

    const totalCost = document.getElementById(id).innerText;
    const convertTotalCost = parseInt(totalCost);
    const sum = convertTotalCost + parseInt(value);
    setInnerText(id, sum);
}
function GrandTotalCost(id, value) {

    const totalCost = document.getElementById(id).innerText;
    const convertTotalCost = parseInt(totalCost);
    const sum = convertTotalCost + parseInt(value);
    setInnerText(id, sum);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}