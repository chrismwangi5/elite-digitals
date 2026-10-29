
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const text = `Hello Christopher, my name is ${name}.
My email is ${email}.

${message}`;

    const whatsappURL =
        'https://wa.me/254793586749?text=' + encodeURIComponent(text);

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
});



/* SCROLL REVEAL ANIMATION */
const revealSections = document.querySelectorAll(
    '#about, #services, #skills, #testimonials, #projects, #contact'
);

revealSections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealSections.forEach(function(section) {
    revealObserver.observe(section);
});



/* BACK TO TOP FUNCTIONALITY */
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* AUTOMATIC COPYRIGHT YEAR */
const currentYear = document.getElementById('year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

    
/* MOBILE NAVIGATION MENU */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');

    const isOpen = navLinks.classList.contains('active');

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});

navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
});


/* ACTIVE NAVIGATION ON SCROLL */
const pageSections = document.querySelectorAll(
    '#home, #about, #services, #projects, #contact'
);

const navigationLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
    let currentSection = '';

    pageSections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

/* HIDE PAGE LOADER WHEN PAGE FINISHES LOADING */
window.addEventListener('load', function () {
    const pageLoader = document.getElementById('page-loader');

    pageLoader.classList.add('loader-hidden');

    setTimeout(function () {
        pageLoader.style.display = 'none';
    }, 600);
});

/* SCROLL PROGRESS BAR FUNCTION */
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    scrollProgress.style.width = progress + '%';
});

/* ANIMATE SKILL PROGRESS BARS */
const skillSection = document.querySelector('#skills');
const progressFills = document.querySelectorAll('.progress-fill');

const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            progressFills.forEach(function (bar) {
                const targetWidth = bar.dataset.progress;
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = targetWidth + '%';
            });

            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (skillSection) {
    skillObserver.observe(skillSection);
}
