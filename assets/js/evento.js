document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-more');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const eventInfo = event.target.parentElement;
            const details = eventInfo.querySelector('.event-details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
            button.textContent = button.textContent === 'Leer más' ? 'Leer menos' : 'Leer más';
        });
    });
});