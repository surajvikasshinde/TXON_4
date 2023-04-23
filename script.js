document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navbar links
    const navbarLinks = document.querySelectorAll("nav ul li a");

    for (const link of navbarLinks) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector("header").offsetHeight;
            const targetOffset = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
        });
    }
});
// Script to toggle visibility of sections when navbar links are clicked

// Get the navbar links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Add event listeners to navbar links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        sections.forEach(section => section.style.display = 'none');
        target.style.display = 'block';
    });
});
