function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');

}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-500');
}


function updateSelectedSeatNumber() {
    const selectedSeatsCount = document.querySelectorAll('.selected').length;
    const selectSeatNumElement = document.getElementById('seat-updated');
    selectSeatNumElement.innerText = selectedSeatsCount;
}

function updateSeatsLeft() {
    const selectedSeats = document.querySelectorAll('.selected');
    const seatsLeftCountElement = document.getElementById('seatsLeftCount');
    const totalSeats = 40;
    const seatsLeft = totalSeats - selectedSeats.length;

    seatsLeftCountElement.innerText = seatsLeft;
}



