
const menuLink = document.querySelector('nav ul li:nth-child(2) a');
const menuDropdown = document.querySelector('.menu-dropdown');

menuLink.addEventListener('mouseenter', () => {
    menuDropdown.style.display = 'block';
});

menuLink.addEventListener('mouseleave', () => {
    menuDropdown.style.display = 'none';
});
