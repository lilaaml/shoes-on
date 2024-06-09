// HAMBURGER MENU
var menuItems = document.getElementById('menuItems');
menuItems.style.opacity = '100%';

function menuToggle() {
    if(menuItems.style.opacity == '0') {
        menuItems.style.opacity = '100%';
    } else {
        menuItems.style.opacity = '0';
    }
}

// PRODUCT DETAILS
var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function() {
   productImg.src = smallImg[0].src; 
}
smallImg[1].onclick = function() {
   productImg.src = smallImg[1].src; 
}
smallImg[2].onclick = function() {
   productImg.src = smallImg[2].src; 
}
smallImg[3].onclick = function() {
   productImg.src = smallImg[3].src; 
}
smallImg[4].onclick = function() {
   productImg.src = smallImg[4].src; 
}
smallImg[5].onclick = function() {
   productImg.src = smallImg[5].src; 
}