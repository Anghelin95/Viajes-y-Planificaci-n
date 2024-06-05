<script>
const nextBtn = document.getElementById('nextBtn');
const cardContainer = document.getElementById('cardContainer');

nextBtn.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});
</script>