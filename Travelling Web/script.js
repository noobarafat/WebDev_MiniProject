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

        const totalCost = document.getElementById("total-cost").innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(price);
        // document.getElementById("total-cost").innerText = sum;

        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + sum;
        

        setInnerText("grand-total", sum2);
        setInnerText("total-cost", sum);
        setInnerText("cart-count", count);
    });
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}