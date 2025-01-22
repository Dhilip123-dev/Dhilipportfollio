// // Toggle bar
// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('header nav');
// menuIcon.addEventListener('click', () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// });

// Toggle bar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const navLInk = document.querySelectorAll('nav a'); // Select all nav links

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close the toggle menu when a link is clicked
navLInk.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


// navlinks
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset  + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
// About section
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () =>{
        const resumeDetails = document.querySelectorAll('.resume-detail');


        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
        
    });
});

// Projects
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-box .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 1) { // Maximum index is 1 (2 projects: index 0 and 1)
        index++;
        arrowLeft.classList.remove('disabled');
    }
    if (index === 1) {
        arrowRight.classList.add('disabled'); // Disable the right arrow at the end
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) { // Minimum index is 0
        index--;
        arrowRight.classList.remove('disabled');
    }
    if (index === 0) {
        arrowLeft.classList.add('disabled'); // Disable the left arrow at the start
    }
    activePortfolio();
});

// Initialize the slider by disabling the left arrow
arrowLeft.classList.add('disabled');

// Contact form
const contactForm = document.getElementById("contactForm");

function cForm() {
    // contactForm.reset(); // This will reset the form fields to their initial values
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        cForm(); // Resets the form after submission
        
    });
}

