document.getElementById('buy-tickets-button').addEventListener('click', function () {

    document.getElementById('ph-paribahan').scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
}
);


function handleSeatSelection(button) {
    const selectedSeats = document.querySelectorAll('.selected');
    const maxSeatsAllowed = 4;
    const allSeatButtons = document.querySelectorAll('.btn');
    const applyCuponButton = document.getElementById('apply-cupon');

    if (!button.classList.contains('selected')) {
        if (selectedSeats.length < maxSeatsAllowed) {
            button.classList.add('selected');
            setBackgroundColorById(button.id);
        } else {
            alert('You can only select up to 4 seats.');
        }
    } else {
        button.classList.remove('selected');
        removeBackgroundColorById(button.id);
    }

    for (let i = 0; i < allSeatButtons.length; i++) {
        const btn = allSeatButtons[i];
        if (selectedSeats.length === maxSeatsAllowed && !btn.classList.contains('selected')) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }

    applyCuponButton.disabled = selectedSeats.length !== maxSeatsAllowed;
}

const seatButtons = document.querySelectorAll('#left-side .btn');
for (let i = 0; i < seatButtons.length; i++) {
    const button = seatButtons[i];
    button.addEventListener('click', function () {
        handleSeatSelection(button);
    });
}