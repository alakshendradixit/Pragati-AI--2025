document.addEventListener('DOMContentLoaded', function() {
    // Example: Add an alert when the button in the hero section is clicked
    const heroButton = document.querySelector('#hero button');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Example: Add a hover effect to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });

    // Example: Basic form validation (client-side)
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            if (!nameInput.value || !emailInput.value) {
                alert('Please fill in all required fields.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});