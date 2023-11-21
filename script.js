document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const submitButton = document.getElementById('submit-button');
    const appointmentDate = document.getElementById('appointment-date');
    const successMessage = document.getElementById('success-message');

    // Set today's date as the default for the appointment date field
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.value = today;

    // Highlight the appointment date field when it has focus
    appointmentDate.addEventListener('focus', function () {
        this.style.backgroundColor = 'yellow';
    });
    appointmentDate.addEventListener('blur', function () {
        this.style.backgroundColor = '';
    });

    // Change the text of the submit button on hover
    submitButton.addEventListener('mouseover', function () {
        this.value = 'Get Ready to Smile';
    });
    submitButton.addEventListener('mouseout', function () {
        this.value = 'Click to Submit';
    });

    // Log input when the email field is changed
    document.getElementById('email').addEventListener('change', function () {
        console.log('Email updated:', this.value);
    });

    // Hide the form and display a success message on submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        form.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.textContent = 'Thank you for making an appointment. Someone will be in contact with you.';
    });
});
