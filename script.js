document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const submitButton = document.getElementById('submit-button');
    const appointmentDate = document.getElementById('appointment-date');
    const successMessage = document.getElementById('success-message');
   
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.value = today;

   appointmentDate.addEventListener('focus', function () {
        this.style.backgroundColor = 'yellow';
    });
    appointmentDate.addEventListener('blur', function () {
        this.style.backgroundColor = '';
    });
   
    submitButton.addEventListener('mouseover', function () {
        this.value = 'Get Ready to Smile';
    });
    submitButton.addEventListener('mouseout', function () {
        this.value = 'Click to Submit';
    });
    
    document.getElementById('email').addEventListener('change', function () {
        console.log('Email updated:', this.value);
    });

    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        form.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.textContent = 'Thank you for making an appointment. Someone will be in contact with you.';
    });
});
