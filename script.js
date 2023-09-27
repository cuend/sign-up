document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('pword');
    const confirmPasswordInput = document.getElementById('confirm');
    const lastRow = document.querySelector('#last-row');
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    
    form.addEventListener('submit', function (event) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault(); // Prevent form submission
        errorElement.textContent = 'Passwords do not match.';
        lastRow.appendChild(errorElement);
      }
    });
  });