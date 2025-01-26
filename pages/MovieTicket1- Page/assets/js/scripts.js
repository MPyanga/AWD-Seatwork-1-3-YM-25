let placeholderData = JSON.parse(localStorage.getItem("Available seats")) || [{ available: 10 }];

// Initialize the `available` seats on page load
document.getElementById("available").innerText = placeholderData[0].available;
// Set initial Seatno value to 0
document.getElementById("Seatno").innerText = 0;

function submit() {
    const Quantity = parseInt(document.getElementById('Quantity').value); // Get the input quantity
    const output = document.getElementById('output'); // Subtotal display
    const hiddenElement = document.getElementById('confirmation'); // Confirmation dialog
    const submitButton = document.getElementById('submit'); // Submit button
    const available = document.getElementById('available'); // Available seats display
    const Seatno = document.getElementById('Seatno'); // Selected seats display
    let currentSeats = parseInt(available.innerText); // Get current seat availability
    const price = 390; // Price per seat



    // Check if there are enough seats available
    if (currentSeats >= Quantity) {
        // Update selected seats and available seats
        Seatno.innerText = Quantity;
        currentSeats -= Quantity;
        const subtotal = price * Quantity; // Calculate subtotal
        output.innerHTML = ` ₱  ${subtotal}`; // Show subtotal

        // Show confirmation dialog and disable submit button
        hiddenElement.style.visibility = "visible";
        submitButton.disabled = true;

        // "Yes" button logic
        document.getElementById('yes').onclick = function () {
            confirmed.style.visibility = 'visible';
            placeholderData = [{ available: currentSeats }]; // Update localStorage
            localStorage.setItem("Available seats", JSON.stringify(placeholderData));
            setTimeout(() => {
                location.reload();
            }, 1000)
            available.innerText = currentSeats; // Update UI with new available seats
        };

        // "No" button logic
        document.getElementById('no').onclick = function () {
            alert('Reservation cancelled.');
            hiddenElement.style.visibility = "hidden"; // Hide confirmation dialog
            submitButton.disabled = false;
            location.reload(); // Re-enable submit button
        };
    } else {
        alert('Not enough seats available.'); // Alert if insufficient seats
    }

    document.getElementById('Quantity').value = '';
}
