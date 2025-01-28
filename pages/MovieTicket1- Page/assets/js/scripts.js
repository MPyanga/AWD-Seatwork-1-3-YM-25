let placeholderData = JSON.parse(localStorage.getItem("Movie 1")) || [{ AvailableSeats: 100 }];

// Initialize the `available` seats on page load
document.getElementById("available").innerText = placeholderData[0].AvailableSeats;
// Set initial Seatno value to 0
document.getElementById("Seatno").innerText = 0;

function submit() {
    const Quantity = parseInt(document.getElementById('Quantity').value); // Get the input quantity
    const output = document.getElementById('output'); // Subtotal display
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
        confirmation.style.visibility = "visible";
        submitButton.disabled = true;

        // "Yes" button logic
        document.getElementById('yes').onclick = function () {
            available.innerText = currentSeats;
            Seatno.innerText = 0;
            output.innerText = "";
            confirmed.style.visibility = 'visible';
            confirmation.style.visibility = 'hidden';
            seatholder.style.visibility = 'hidden';
            h3.style.visibility = 'hidden';
            placeholderData = [{ AvailableSeats: currentSeats }]; // Update localStorage
            localStorage.setItem("Movie 1", JSON.stringify(placeholderData));
            setTimeout(() => {
                location.reload();
            }, 1500)
             
        };

        // "No" button logic
        document.getElementById('no').onclick = function () {
            alert('Reservation cancelled.');
           confirmation.style.visibility = "hidden"; // Hide confirmation dialog
            submitButton.disabled = false;
            location.reload(); // Re-enable submit button
        };
    } else {
        alert('Not enough seats available.'); // Alert if insufficient seats
    }

    document.getElementById('Quantity').value = '';
}
