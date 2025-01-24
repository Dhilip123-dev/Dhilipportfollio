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
        // event.preventDefault(); // Prevents default form submission

        // Perform your API submission logic or custom success handling here
        // Example: simulate a successful submission
        setTimeout(() => {
            alert("Thanks For Visiting My Website\n\nThe Form submitted successfully..!!");
            contactForm.reset(); // Resets the form fields after success
        }, 500); // Simulates some delay for success message
    }


// Scroll reveal

// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.home-detail, heading , .field-box',  { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .resume-box, .skills-container  ', { origin: 'bottom' });
// ScrollReveal().reveal('.resume-detail ' , { origin: 'left' });
// ScrollReveal().reveal('.resume-item, .resume-list, .resume-list', { origin: 'right' });


// CURSOR

const cursor = document.querySelector(".cursor");
let timeout;

// Check if we're on the home page
if (document.body.id === "home-page") {
    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
        cursor.style.display = "block";

        function mouseStopped() {
            cursor.style.display = "none";
        }

        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
    });

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";  // Hide cursor when mouse leaves the page
    });
}

