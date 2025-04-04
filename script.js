document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const formSection = document.querySelector('.form-section');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h2>Thank You!</h2>
        <p>We've received your information and will contact you shortly.</p>
        <p>In the meantime, feel free to explore our services at <a class="tfmg-link" href="http://thefranchisemarketinggroup.com" target="_blank">Franchise Marketing Group</a>.</p>
    `;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            zipcode: document.getElementById('zipcode').value
        };

        try {
            // Replace this URL with your actual form submission endpoint
            const response = await fetch('YOUR_FORM_SUBMISSION_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Replace form with success message
                formSection.innerHTML = '';
                formSection.appendChild(successMessage);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    });

    // Basic form validation
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() === '') {
                this.setCustomValidity('This field is required');
            } else {
                this.setCustomValidity('');
            }
        });
    });
}); 