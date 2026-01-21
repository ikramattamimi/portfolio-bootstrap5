// Section Loader - Load HTML sections dynamically
(function() {
    // Configuration for sections to load
    const sections = [
        { id: 'header-section', file: 'sections/header.html' },
        { id: 'experience-section', file: 'sections/experience.html' },
        { id: 'projects-section', file: 'sections/projects.html' },
        { id: 'techstack-section', file: 'sections/techstack.html' },
        { id: 'cv-section', file: 'sections/cv.html' },
        { id: 'contact-section', file: 'sections/contact.html' },
        { id: 'footer-section', file: 'sections/footer.html' }
    ];

    // Function to load a section
    async function loadSection(section) {
        try {
            const response = await fetch(section.file);
            if (!response.ok) {
                throw new Error(`Failed to load ${section.file}`);
            }
            const html = await response.text();
            const placeholder = document.getElementById(section.id);
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading section ${section.id}:`, error);
        }
    }

    // Load all sections
    async function loadAllSections() {
        const loadPromises = sections.map(section => loadSection(section));
        await Promise.all(loadPromises);
        
        // After all sections are loaded, initialize components
        initializeComponents();
    }

    // Initialize components after sections are loaded
    function initializeComponents() {
        // Initialize Swiper for projects
        if (typeof Swiper !== 'undefined') {
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
        }

        // Initialize navbar functions
        handleNavbarShadow();
        updateActiveNavigation();
        setupSmoothScroll();
    }

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
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        if (window.scrollY < 100) {
            currentSection = 'header';
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
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
                        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
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

    // Event listeners
    window.addEventListener('scroll', function() {
        handleNavbarShadow();
        updateActiveNavigation();
    });

    // Load sections when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllSections);
    } else {
        loadAllSections();
    }
})();
