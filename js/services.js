// Function to handle showing the correct service section based on URL parameter
function showServiceSection() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');

    // Get all buttons and details elements
    const buttons = document.querySelectorAll('.service-btn');
    const details = document.querySelectorAll('.service-details');

    // Define mapping between parameter value and target IDs
    const serviceMap = {
        languageCourse: 'service-1',
        AdmissionSupport: 'service-2',
        jobPlacement: 'service-3',
        careerCounselling: 'service-4'
    };

    // Get target ID from parameter or default to the first section
    const targetId = serviceMap[service] || 'service-1';

    // Set the active button and detail based on target ID
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-target') === targetId) {
            button.classList.add('active');
        }
    });

    details.forEach(detail => {
        detail.classList.remove('active');
        if (detail.id === targetId) {
            detail.classList.add('active');
        }
    });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', showServiceSection);
