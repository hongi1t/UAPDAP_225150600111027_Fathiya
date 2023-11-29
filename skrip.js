document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    // Toggle the "active" class on the menu icon and navbar
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close the navbar when a menu item is clicked (for better UX)
    const menuItems = document.querySelectorAll(".navbar a");
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
});
