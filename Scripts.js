// Parallax scrolling effect for the hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});
