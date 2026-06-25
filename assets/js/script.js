VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 10,
});

var typed = new Typed(".typing-text", {
    strings: ["Programming" , "Data Analyst" , "Python programmer", "BI Developer" ],
    typeSpeed:50,
    backSpeed:40,
    backDelay:500,
    loop:true
});

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});
const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

// 2. Add a click event listener to the hamburger icon
menuIcon.addEventListener('click', () => {
    // This toggles the 'active' class. If it's there, remove it. If not, add it.
    navbar.classList.toggle('active');
});

// 3. Optional: Close the menu when a link inside it is clicked
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
