document.getElementById('guests-text').addEventListener('click', function() {
    document.getElementById('guests-dropdown').style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.guests')) {
        document.getElementById('guests-dropdown').style.display = 'none';
    }
});

document.getElementById('guests-dropdown').addEventListener('input', function() {
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const rooms = document.getElementById('rooms').value;
    document.getElementById('guests-text').innerText = `${adults} adultos · ${children} niños · ${rooms} habitación${rooms > 1 ? 'es' : ''}`;
});

document.getElementById('search-button').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    if (destination) {
        document.getElementById('search-message').classList.remove('hidden');
    } else {
        alert('Por favor, selecciona un destino.');
    }
});
