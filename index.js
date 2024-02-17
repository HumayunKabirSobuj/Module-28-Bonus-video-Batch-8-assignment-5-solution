let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for (const card of cards) {
    card.addEventListener('click', function () {
        // console.log('clicked');
        // get the title
        const title = card.querySelector('h2').innerText;
        const price = parseFloat(card.querySelector('h3').innerText.split(" ")[1]);
        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer);
        const p = document.createElement('p');
        p.innerText = titleCount + ' . ' + title;
        titleContainer.appendChild(p);
        titleCount++;

        // calculate price
        totalPrice = totalPrice + price;
        // console.log(totalPrice);
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);


    });
}

const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function () {
    // get the value from input

    const cupponElement = document.getElementById('input-cuppon').value;
    const cupponCode = cupponElement.split(" ").join("").toUpperCase();
    // console.log(cupponCode);
    if (totalPrice >= 200) {
        if (cupponCode === "SELL200") {

            // discount calculation
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.20;
            discountElement.innerText = discountAmount.toFixed(2);
            // rest total calculation

            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-cuppon').value="";

        }
        else {
            alert("Invalid Cuppon Code");
            document.getElementById('input-cuppon').value="";
        }
    }
    else {
        alert('Buy at least $200 to apply cuppon ');
        document.getElementById('input-cuppon').value="";
    }


});