document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var amount = document.getElementById("amount").value;
    if (amount > 0) {
        // Here you can add code to handle the donation submission,
        // such as sending data to a server or displaying a thank you message.
        alert("Thank you for your donation of $" + amount);
    } else {
        alert("Please enter a valid donation amount.");
    }
});
