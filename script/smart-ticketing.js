document.getElementById('buy-tickets-button').addEventListener('click', function () {

    document.getElementById('ph-paribahan').scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
}
);

// Update grand total
function updateGrandTotal(discountPrice) {
    let price = document.getElementById("total-price");
    let tPrice = parseInt(price.innerText);
    tPrice -= discountPrice;
    console.log(tPrice);
    let totalPrice = document.getElementById("grand-total")
    totalPrice.innerText = tPrice;
}
// apply coupon code
function discountedPrice() {
    const couponCode = document.getElementById("coupon");
    const coupon = couponCode.value;
    let discountPrice;
    console.log(coupon);
    if (coupon == 'NEW15') {
        document.getElementById("NEW15").classList.remove('hidden');
        let couponDiscountPrice = document.getElementById("Discounted-price-1");
        discountPrice = parseInt(couponDiscountPrice.innerText);
        let divApply = document.getElementById("apply-coupon-div");
        divApply.classList.add("hidden");
        updateGrandTotal(discountPrice);

    }
    else if (coupon === 'Couple 20') {
        document.getElementById("Couple20").classList.remove('hidden');
        let couponDiscountPrice = document.getElementById("Discounted-price-2");
        discountPrice = parseInt(couponDiscountPrice.innerText);
        let divApply = document.getElementById("apply-coupon-div");
        divApply.classList.add("hidden");
        updateGrandTotal(discountPrice);
    }
    else {
        alert('This coupon is not valid.');
    }


}

function insertSeatInfo(seatID) {
    const content1 = seatID;
    const content2 = 'Economy';
    const content3 = '550';

    const htmlContent = `
    <div class="flex justify-between mt-6 mb-6 font-semibold">
      <p>${content1}</p>
      <p>${content2}</p>
      <p>${content3}</p>
    </div>
  `;

    const seatInfoDiv = document.getElementById('seat-info');

    // Append the generated HTML content to the seat-info div
    seatInfoDiv.innerHTML += htmlContent;
}


function calculateTotalCost() {
    const selectedSeats = document.querySelectorAll('.selected');
    const costPerSeat = 550;
    const totalCost = selectedSeats.length * costPerSeat;

    const totalCostElement = document.getElementById('total-price');
    if (totalCostElement) {
        totalCostElement.innerText = totalCost + ' BDT';
    }
    let totalPrice = document.getElementById("grand-total")
    totalPrice.innerText = totalCost;
}

function handleSeatSelection(button) {
    const selectedSeats = document.querySelectorAll('.selected');
    const maxSeatsAllowed = 4;
    const allSeatButtons = document.getElementById("left-side").querySelectorAll(".btn");
    const applyCuponButton = document.getElementById('apply-coupon-btn');

    if (!button.classList.contains('selected')) {
        if (selectedSeats.length < maxSeatsAllowed) {
            button.classList.add('selected');
            setBackgroundColorById(button.id);
            updateSeatsLeft();
            updateSelectedSeatNumber();
            calculateTotalCost();

            insertSeatInfo(button.id);

        } else {
            alert('You can only select up to 4 seats.');
        }
    } else {
        button.classList.remove('selected');
        removeBackgroundColorById(button.id);
        updateSeatsLeft();
        updateSelectedSeatNumber();
    }

    for (let i = 0; i < allSeatButtons.length; i++) {
        const btn = allSeatButtons[i];
        if (selectedSeats.length === maxSeatsAllowed && !btn.classList.contains('selected')) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }

    const selectedCount = document.querySelectorAll('.selected').length;
    applyCuponButton.disabled = selectedCount < maxSeatsAllowed;
}

const seatButtons = document.querySelectorAll('#left-side .btn');
for (let i = 0; i < seatButtons.length; i++) {
    const button = seatButtons[i];
    button.addEventListener('click', function () {
        handleSeatSelection(button);
    });
}

updateSeatsLeft();
updateSelectedSeatNumber();
calculateTotalCost();