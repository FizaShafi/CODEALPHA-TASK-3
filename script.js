
// Select Menu Elements

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Menu

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// Scroll Animations

const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.classList.add("reveal");
});

// Intersection Observer

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

// Observe All Sections

sections.forEach(section => {
    observer.observe(section);
});
