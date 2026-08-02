document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Navbar Toggle
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("fa-times");
            navbar.classList.toggle("active");
        });
    }

    // 2. Window Scroll Navigation & Top Scroll Button Toggle
    const scrollTop = document.querySelector("#scroll-top");

    window.addEventListener("scroll", () => {
        if (menuBtn && navbar) {
            menuBtn.classList.remove("fa-times");
            navbar.classList.remove("active");
        }

        if (scrollTop) {
            if (window.scrollY > 60) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        }

        // Active Navbar Scroll Spy
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar a");

        sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 200;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    const targetLink = document.querySelector(`.navbar a[href*='${id}']`);
                    if (targetLink) targetLink.classList.add("active");
                });
            }
        });
    });

    // 3. Technical Skills Filter Routine
    const skillFilters = document.querySelectorAll(".skills-filter .filter-btn");
    const skillCards = document.querySelectorAll(".skills-grid .skill-card");

    skillFilters.forEach((btn) => {
        btn.addEventListener("click", () => {
            skillFilters.forEach((f) => f.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            skillCards.forEach((card) => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    // 4. Projects Category Filter Routine
    const projectFilters = document.querySelectorAll(".project-filter .p-filter-btn");
    const projectCards = document.querySelectorAll(".projects-grid .project-card");

    projectFilters.forEach((btn) => {
        btn.addEventListener("click", () => {
            projectFilters.forEach((f) => f.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            projectCards.forEach((card) => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    // 5. VanillaTilt Initialization
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // 6. Typed.js Initialization
    const typingElement = document.querySelector(".typing-text");
    if (typingElement && typeof Typed !== "undefined") {
        new Typed(".typing-text", {
            strings: ["Data Analytics", "SQL Database Engineering", "Power BI Dashboards", "Python Automation"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000
        });
    }
});
