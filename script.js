const form = document.getElementById('registrationForm');
const acknowledgement = document.getElementById('acknowledgement');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // You can add validation logic here if needed

    // Display the acknowledgement message
    acknowledgement.style.display = 'block';
    form.style.display = 'none';
});
