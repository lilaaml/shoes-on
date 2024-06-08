var menuItems = document.getElementById('menuItems');

menuItems.style.opacity = '100%';

function menuToggle() {
    if(menuItems.style.opacity == '0') {
        menuItems.style.opacity = '100%';
    } else {
        menuItems.style.opacity = '0';
    }
}