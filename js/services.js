document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.service-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.service-details').forEach(detail => {
            detail.classList.remove('active');
        });

        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});