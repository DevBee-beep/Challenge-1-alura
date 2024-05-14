// script.js

document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = location.href;
    var menuItem = document.querySelectorAll('nav ul li a');
    var menuLength = menuItem.length;
    for (var i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
});
