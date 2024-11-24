document.addEventListener("DOMContentLoaded", () => {
    // Handle active navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    function updateActiveLink() {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});

document.addEventListener("DOMContentLoaded", () => {
    // Handle fade-in and fade-out effects
    const elements = document.querySelectorAll(".scroll-fade");

    const onScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
                // Element is in viewport: fade in
                el.classList.add("visible");
            } else {
                // Element is out of viewport: fade out
                el.classList.remove("visible");
            }
        });
    };

    // Trigger on load and scroll
    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check in case some elements are already in view
});
