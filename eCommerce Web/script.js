// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// =========================
// DESIGN TABS
// =========================

const tabs = document.querySelectorAll(".tab");
const designContents = document.querySelectorAll(".design-content");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active class from buttons
        tabs.forEach((button) => {
            button.classList.remove("active");
        });

        // Remove active content
        designContents.forEach((content) => {
            content.classList.remove("active");
        });

        // Activate clicked button
        tab.classList.add("active");

        // Get selected tab
        const selectedTab = tab.dataset.tab;

        // Show selected content
        document
            .getElementById(selectedTab)
            .classList.add("active");

    });

});


// =========================
// CLOSE MOBILE MENU
// WHEN CLICKING A LINK
// =========================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });

});