new Swiper(".project-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev"
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

new Swiper(".modal-image-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});


// Navbar Shadow on Scroll
function handleNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Active Navigation Based on Section
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Special case for top of page (header)
    if (window.scrollY < 100) {
        currentSection = 'header';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Check if link matches current section
        if (href === '#' && currentSection === 'header') {
            link.classList.add('active');
        } else if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                let targetId = href === '#' ? 'header' : href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after click
                    const navbarCollapse = document.getElementById('navbarSupportedContent');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

// Initialize all functions
window.addEventListener('load', function() {
    handleNavbarShadow();
    updateActiveNavigation();
    setupSmoothScroll();
});

window.addEventListener('scroll', function() {
    handleNavbarShadow();
    updateActiveNavigation();
});
