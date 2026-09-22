// =========================================================
// AXENTRA PRIMA AKSARA
// WEBSITE INTERACTION
// =========================================================


// ================= NAVBAR =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Tutup menu setelah memilih menu

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================= BACK TO TOP =================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CLOSE MOBILE MENU WHEN CLICK OUTSIDE =================

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navMenu.classList.remove("active");

    }

});